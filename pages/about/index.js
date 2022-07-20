import {
  container,
  aboutCard
} from "styles/about.module.scss";
import { useContext, useEffect } from "react";
import { ThreejsContext } from "components/Layout";
import PhotoCube from "./PhotoCube";

const AboutPage = () => {
  const { setFloaterGeometry } = useContext(ThreejsContext);

  useEffect(() => {  
    setFloaterGeometry(
      <cylinderGeometry args={[2, 3, 3, 32]} />
    ); 
  }, []);

  return (
    <div className={container}>
      <div className={aboutCard}>
        <div>
          <PhotoCube />
        </div>
        <h2>About me</h2>
      </div>
    </div>
  )
}

export default AboutPage;