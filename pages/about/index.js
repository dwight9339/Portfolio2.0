import {
  container,
  aboutCard,
  title,
  bioContainer,
  photoCubeContainer
} from "styles/about.module.scss";
import { useContext, useEffect } from "react";
import { ThreejsContext } from "components/Layout";
import PhotoCube from "./PhotoCube";

const AboutPage = () => {
  const { setFloaterGeometry } = useContext(ThreejsContext);
  const bioText = `
    Hi, I'm David. I'm a full-stack web developer who loves building things
    and the thrill of tackling a difficult problem. The only thing better 
    than finding a solution that works is finding an elegant solution that
    works. 
    When I'm not building web apps, I'm probably prototyping an idea
    for a new invention, building furniture, or carving something out of wood.
  `;

  useEffect(() => {  
    setFloaterGeometry(
      <cylinderGeometry args={[2, 3, 3, 32]} />
    ); 
  }, []);

  return (
    <div className={container}>
      <div className={aboutCard}>
        <h2 className={title}>About me</h2>
        <div className={bioContainer}>
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