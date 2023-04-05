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
import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";

const Header = () => {
  const router = useRouter();
  const { scrollingUp, yOffset } = useScrolling();
  const [headerShowing, setHeaderShowing] = useState(true);
  const [headerClass, setHeaderClass] = useState(header);
  const inStickyZone = useMemo(() => yOffset > 10, [yOffset]);
  
  useEffect(() => {
    console.log("scrollingUp: ", scrollingUp);
    console.log("headerShowing: ", headerShowing);
    console.log("inStickyZone: ", inStickyZone);
    if (inStickyZone && headerShowing && !scrollingUp) {
      setHeaderShowing(false);
      setHeaderClass(headerSlideOut);
    } else if (inStickyZone && !headerShowing && scrollingUp) {
      setHeaderShowing(true);
      setHeaderClass(headerSlideIn);
    } else if (!inStickyZone && !headerShowing) {
      setHeaderShowing(true);
      setHeaderClass(headerSlideIn);
    }
  }, [router.asPath, scrollingUp, headerShowing, inStickyZone]);

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
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <div className={navItem}>
          <Link href="/about">
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