import Link from "next/link";
import Image from "next/image";
import {
  header,
  headerSticky,
  logoContainer,
  navbar,
  navItem
} from "../styles/header.module.scss";
import useScrolling from "../hooks/useScrolling";

export default () => {
  const { scrollingUp, yOffset } = useScrolling();

  return (
    <header 
      className={
        yOffset > 500 && scrollingUp
          ? headerSticky 
          : header
      }
    >
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