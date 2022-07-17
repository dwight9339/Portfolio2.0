import Link from "next/link";
import Image from "next/image";
import {
  header,
  headerSlideIn,
  headerSlideOut,
  logoContainer,
  navbar,
  navItem
} from "../styles/header.module.scss";
import useScrolling from "../hooks/useScrolling";
import { useState, useEffect, useMemo } from "react";

const Header = () => {
  const { scrollingUp, yOffset } = useScrolling();
  const [headerShowing, setHeaderShowing] = useState(true);
  const [headerClass, setHeaderClass] = useState(header);
  const inStickyZone = useMemo(() => yOffset > 10, [yOffset]);
  
  useEffect(() => {
    if (inStickyZone && headerShowing && !scrollingUp) {
      setHeaderShowing(false);
      setHeaderClass(headerSlideOut);
    } else if (inStickyZone && !headerShowing && scrollingUp) {
      setHeaderShowing(true);
      setHeaderClass(headerSlideIn);
    } 
  }, [scrollingUp, headerShowing, inStickyZone]);

  return (
    <header className={headerClass}>
      <div className={logoContainer}>
        <Link href="/">
          <a>
            <Image 
              src="/images/mylogo.svg" 
              width="200px"
              height="100px"
              alt="David White logo"
            />
          </a>
        </Link>  
      </div>
      <nav className={navbar}>
        <div className={navItem}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
        <div className={navItem}>
          <Link href="">
            <a>Gallery</a>
          </Link>
        </div>
        <div className={navItem}>
          <Link href="">
            <a>About</a>
          </Link>
        </div>
        <div className={navItem}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;