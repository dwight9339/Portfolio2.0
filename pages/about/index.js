import {
  container,
  aboutCard,
  title,
  bioContainer,
  photoCubeContainer,
  links
} from "styles/about.module.scss";
import { useContext, useEffect } from "react";
import { ThreejsContext } from "components/Layout";
import PhotoCube from "./PhotoCube";
import Image from "next/image";

const AboutPage = () => {
  const { setFloaterGeometry } = useContext(ThreejsContext);
  const bioText = `
    Hi, I'm David. I'm a full-stack web developer who loves building things
    and the thrill of tackling a difficult problem. I like conceptualizing new
    ideas but being able to make them real is the best feeling ever. 
    When I'm not building web apps, I'm probably learning a new skill, 
    building furniture or carving something out of wood.
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
        <div className={links}>
          <a href="https://github.com/dwight9339">
           <Image
              src="/images/github_logo.svg"
              width={55}
              height={55}
              alt="GitHub logo icon. Click to visit my github page"
            /> 
          </a>
          <a href="https://www.linkedin.com/in/david-white-9b0153144/">
            <Image
              src="/images/linkedin_icon.svg"
              width={55}
              height={55}
              alt="YouTube logo icon. Click to visit my linkedin page"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCj6tkIHQHufV5VMaCx0Hvrg">
            <Image
              src="/images/youtube_icon.svg"
              width={55}
              height={55}
              alt="YouTube logo icon. Click to visit my youtube channel"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;