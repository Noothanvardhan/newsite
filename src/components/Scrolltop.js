import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function AOSController() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Init once
    window.scroll( 0 ,0)
  }, [pathname]);

  return null;
}




export default AOSController;
