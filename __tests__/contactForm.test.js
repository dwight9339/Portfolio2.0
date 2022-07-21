import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Contact, { successText, failureText } from "pages/contact/Contact";
import '@testing-library/jest-dom';
import axios from "axios";

const server = setupServer(
  rest.post("/api/send-inquiry", (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

const getTestComponent = () => {
  const utils = render(<Contact />);
  const nameField = utils.getByTestId("nameField");
  const emailField = utils.getByTestId("emailField");
  const messageField = utils.getByTestId("messageField");
  const submitButton = utils.getByTestId("submitButton");

  return {
    nameField,
    emailField,
    messageField,
    submitButton,
    ...utils
  };
}

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
  server.events.removeAllListeners();
});

afterAll(() => {
  server.close();
});

describe("Contact form", () => {
  test("prevents submitting blank fields", async () => {
    const { 
      nameField,
      emailField,
      messageField,
      submitButton
    } = getTestComponent();
    let serverRequestRecieved = false;

    server.events.on("request:start", (req) => {
      console.log("Received request");
      serverRequestRecieved = true;
    });

    const clickAndCheckFalse = async () => {
      fireEvent.click(submitButton);
      const resolved = await new Promise(resolve => setTimeout(() => true, 0));
      expect(resolved).toBe(true);
      expect(serverRequestRecieved).toBe(false);
    };

    clickAndCheckFalse();

    nameField.setAttribute("value", "Test");
    clickAndCheckFalse();

    emailField.setAttribute("value", "test@testdomain.test");
    clickAndCheckFalse();

    messageField.innerHTML = "This is a test";
    fireEvent.click(submitButton);

    await waitFor(() => expect(serverRequestRecieved).toBe(true));
  });

  test("shows success message after successful submission", async () => {
    const { 
      nameField,
      emailField,
      messageField,
      submitButton
    } = getTestComponent();
    let serverRequestRecieved = false;
    let serverResponseSent = false;

    server.events.on("request:start", (req) => {
      serverRequestRecieved = true;
    });

    server.events.on("response:mocked", (res) => {
      serverResponseSent = true;
    });

    nameField.setAttribute("value", "Test");
    emailField.setAttribute("value", "test@testdomain.test");
    messageField.innerHTML = "This is a test";
    fireEvent.click(submitButton);

    await waitFor(() => expect(serverRequestRecieved).toBe(true));
    await waitFor(() => expect(serverResponseSent).toBe(true));

    expect(screen.getByTestId("feedbackMessage")).toBeVisible();
    expect(screen.getByTestId("feedbackMessage")).toHaveTextContent(successText);
  });

  test("shows failure message after unsuccessful submission", async () => {
    const { 
      nameField,
      emailField,
      messageField,
      submitButton
    } = getTestComponent();

    server.use(
      rest.post("/api/send-inquiry", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    let serverRequestRecieved = false;
    let serverResponseSent = false;

    server.events.on("request:start", (req) => {
      serverRequestRecieved = true;
    });

    server.events.on("response:mocked", (res) => {
      serverResponseSent = true;
    });

    nameField.setAttribute("value", "Test");
    emailField.setAttribute("value", "test@testdomain.test");
    messageField.innerHTML = "This is a test";
    fireEvent.click(submitButton);

    await waitFor(() => expect(serverRequestRecieved).toBe(true));
    await waitFor(() => expect(serverResponseSent).toBe(true));

    expect(screen.getByTestId("feedbackMessage")).toBeVisible();
    expect(screen.getByTestId("feedbackMessage")).toHaveTextContent(failureText);
  });
});