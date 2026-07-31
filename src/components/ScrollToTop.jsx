import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    window.setTimeout(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ block: "start" });
    }, 0);
  }, [hash, pathname]);

  // component doesn't render anything
  return null;
}

export default ScrollToTop;
