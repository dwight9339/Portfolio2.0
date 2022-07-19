import {
  container,
  aboutCard
} from "styles/about.module.scss";
import { useContext, useEffect } from "react";
import { ThreejsContext } from "components/Layout";

const AboutPage = () => {
  const { setFloaterGeometry } = useContext(ThreejsContext);

  useEffect(() => {
    setFloaterGeometry(
      <cylinderGeometry args={[2, 2, 3, 6]} />
    ); 
  }, []);

  return (
    <div className={container}>
      <div className={aboutCard}>
        <h2>About me</h2>
      </div>
    </div>
  )
}

export default AboutPage;