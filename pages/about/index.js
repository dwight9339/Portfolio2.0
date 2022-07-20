import {
  container,
  aboutCard,
  title,
  contents,
  photoCubeContainer
} from "styles/about.module.scss";
import { useContext, useEffect } from "react";
import { ThreejsContext } from "components/Layout";
import PhotoCube from "./PhotoCube";

const AboutPage = () => {
  const { setFloaterGeometry } = useContext(ThreejsContext);
  const bioText = "Hi! I'm David. I'm a full-stack web developer."

  useEffect(() => {  
    setFloaterGeometry(
      <cylinderGeometry args={[2, 3, 3, 32]} />
    ); 
  }, []);

  return (
    <div className={container}>
      <div className={aboutCard}>
        <h2 className={title}>About me</h2>
        <div className={contents}>
          <div className={photoCubeContainer}>
            <PhotoCube />
          </div>
          <p>
            {bioText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;