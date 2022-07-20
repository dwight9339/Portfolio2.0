import Contact from "./Contact";
import { ThreejsContext } from "components/Layout";
import { useContext, useEffect } from "react";

const ContactPage = () => {
  const { setFloaterGeometry } = useContext(ThreejsContext);

  useEffect(() => {
    setFloaterGeometry(
      <coneGeometry args={[3, 4, 20, 5, false, 0, 4]} />
    );
  }, [setFloaterGeometry]);

  return (
    <Contact />
  );
}

export default ContactPage;