import { useEffect, useRef, useState } from "react";

export default <T>(): {
  isVisible: boolean;
  containerRef: React.RefObject<T>;
} => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const containerRef = useRef<T & null>(null);
  const beIntersecting = ([entry]: IntersectionObserverEntry[]): void => {
    if (containerRef) setVisible(entry.isIntersecting);
  };
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0",
    threshold: 0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(beIntersecting, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [isVisible]);
  return { isVisible, containerRef };
};
