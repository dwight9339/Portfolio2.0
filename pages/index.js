import Home from "components/Home";
import { ThreejsContext } from "components/Layout";
import { useContext, useEffect } from "react";

const HomePage = () => {
  const { setFloaterGeometry } = useContext(ThreejsContext);

  useEffect(() => {
    setFloaterGeometry(
      <torusKnotGeometry args={[2, 0.5]} />
    );
  }, []);

  return (
    <Home />
  );
}

export default HomePage;