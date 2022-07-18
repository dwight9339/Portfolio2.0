import {
  container,
  aboutCard
} from "styles/about.module.scss";

const AboutPage = () => {
  return (
    <div className={container}>
      <div className={aboutCard}>
        <h2>About me</h2>
      </div>
    </div>
  )
}

export default AboutPage;