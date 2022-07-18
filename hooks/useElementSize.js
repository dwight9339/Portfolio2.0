import { useCallback, useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useElementSize = () => {
  const [ref, setRef] = useState(null);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, size];
}

export default useElementSize;
