import {
  container,
  introCard
} from "/styles/home.module.scss";

const Home = () => {
  return (
    <div className={container}>
      <div className={introCard}>
        <h2>Welcome to my portfolio</h2>
      </div>
    </div>
  )
}

export default Home;