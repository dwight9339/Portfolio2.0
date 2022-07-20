import {
  container,
  introCard,
  rotateY,
  rotateZ
} from "/styles/home.module.scss";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className={container}>
      <div className={introCard}>
        <h2>Welcome to my portfolio</h2>
        <div>
          <Image
            src="/images/project_icon.svg"
            width={150}
            height={150}
          />
        </div>
        <p>
          Check out the <Link href="/projects"><a>projects</a></Link> page 
          to see some things that I&apos;ve worked on.
        </p>
        <div>
          <Image
            src="/images/gallery_icon.png"
            width={150}
            height={150 * 0.8776}
          />
        </div>
        <p>
          Head over to the <Link href="/gallery"><a>gallery</a></Link> to see 
          some cool code animations.
        </p>
        <div>
          <Image
            src="/images/about_icon.png"
            width={150}
            height={150 * 1.1176}
          />
        </div>
        <p>
          You can learn a little more about me and find links to my socials 
          over on the <Link href="/about"><a>about</a></Link> page.
        </p>
        <div>
          <Image
            src="/images/contact_icon.png"
            width={150}
            height={150 * 0.7618}
          />
        </div>
        <p>
          To drop me a line, you can use the form on 
          the <Link href="/about"><a>contact</a></Link> page 
          or email me at david@david-white.dev.
        </p>
      </div>
    </div>
  )
}

export default Home;