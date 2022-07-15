import { useEffect, useState } from 'react'

const useScrolling = () => {
  let prevScroll;
  if (process.browser) {
    prevScroll = window.pageYOffset
  }

  const [scrollingUp, setScrollingUp] = useState(false);
  const [yOffset, setyOffset] = useState(0);

  const handleScroll = () => {
    const currScroll = window.pageYOffset
    const isScrolled = prevScroll > currScroll
    setScrollingUp(isScrolled);
    setyOffset(currScroll);
    prevScroll = currScroll
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return {
    scrollingUp,
    yOffset
  }
}

export default useScrolling;