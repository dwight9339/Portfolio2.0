import Link from "next/link";
import Image from "next/image";
import {
  header,
  logoContainer,
  navbar,
  navItem
} from "../styles/header.module.scss";

export default () => {
  return (
    <header className={header}>
      <div className={logoContainer}>
        <Image 
          src="/images/mylogo.svg" 
          width="200px"
          height="200px"
        />  
      </div>
      <nav className={navbar}>
        <div className={navItem}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
        <div className={navItem}>
          <Link href="/test">
            <a>Gallery</a>
          </Link>
        </div>
        <div className={navItem}>
          <Link href="/test">
            <a>About</a>
          </Link>
        </div>
        <div className={navItem}>
          <Link href="/test">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}