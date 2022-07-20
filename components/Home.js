import {
  container,
  introCard
} from "/styles/home.module.scss";
import Link from "next/link";

const Home = () => {
  return (
    <div className={container}>
      <div className={introCard}>
        <h2>Welcome to my portfolio</h2>
        <p>
          If you would like to see some projects of mine you can 
          find them <Link href="/projects"><a>here.</a></Link>
        </p>
        <p>
          Head over to the <Link href="/gallery"><a>gallery</a></Link> to see 
          some cool code animations.
        </p>
        <p>
          Check out the <Link href="/about"><a>about</a></Link> page to
          learn a little more about me.
        </p>
        <p>
          To drop me a line, you can use the conact 
          form <Link href="/about"><a>here.</a></Link>
        </p>
      </div>
    </div>
  )
}

export default Home;