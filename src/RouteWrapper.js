import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from './loader';

const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Preloader />}
      {!loading && children}
    </>
  );
};

export default RouteWrapper;
