import { useEffect, useState, useRef } from "react";

function useIsInView(options) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return { targetRef, isVisible };
}

export default useIsInView;
