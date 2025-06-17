import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to the top of the page when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // component doesn't render anything
  return null;
}

export default ScrollToTop;
