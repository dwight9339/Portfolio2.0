import Contact from "./Contact";
import { ThreejsContext } from "components/Layout";
import { useContext, useEffect } from "react";

const ContactPage = () => {
  const { setFloaterGeometry } = useContext(ThreejsContext);

  useEffect(() => {
    setFloaterGeometry(
      <dodecahedronGeometry args={[3]} />
    );
  }, []);

  return (
    <Contact />
  );
}

export default ContactPage;