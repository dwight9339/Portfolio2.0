import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Contact, { sendInquiryRequest } from "pages/contact/Contact";
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
      serverRequestRecieved = true;
    });

    const clickAndCheckFalse = async () => {
      fireEvent.click(submitButton);
      await new Promise(resolve => setTimeout(resolve, 0));
      expect(serverRequestRecieved).toBe(false);
    };

    const clickAndCheckTrue = async () => {
      fireEvent.click(submitButton);
      await new Promise(resolve => setTimeout(resolve, 0));
      expect(serverRequestRecieved).toBe(true);
    };

    clickAndCheckFalse();

    fireEvent.change(nameField, "Test"); 
    clickAndCheckFalse();

    fireEvent.change(emailField, "test@testdomain.test");
    clickAndCheckFalse();

    fireEvent.change(messageField, "This is a test");
    clickAndCheckTrue();
  });

  test("shows success message after successful submission", async () => {
    const { 
      nameField,
      emailField,
      messageField,
      submitButton
    } = getTestComponent();
    let serverRequestRecieved = false;

    server.events.on("request:start", (req) => {
      serverRequestRecieved = true;
    });

    fireEvent.change(nameField, "Test User");
    fireEvent.change(emailField, "test.user@testdomain.net");
    fireEvent.change(messageField, "This is a test");
    fireEvent.click(submitButton);

    await new Promise(resolve => setTimeout(resolve, 0));
    expect(serverRequestRecieved).toBe(true);

    await waitFor(() => expect(screen.getByTestId("feedbackMessage")).toHaveTextContent("Message sent"));
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

    server.events.on("request:start", (req) => {
      serverRequestRecieved = true;
    });

    fireEvent.change(nameField, "Test User");
    fireEvent.change(emailField, "test.user@testdomain.net");
    fireEvent.change(messageField, "This is a test");
    fireEvent.click(submitButton);

    await new Promise(resolve => setTimeout(resolve, 0));
    expect(serverRequestRecieved).toBe(true);

    await waitFor(() => expect(screen.getByTestId("feedbackMessage")).toHaveTextContent("Unable to send message"));
  });
});