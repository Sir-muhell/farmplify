import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}
const PageTransitionWrapper = ({ children }: PageTransitionWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 20 }}
      exit={{ opacity: 20 }}
      transition={{ duration: 5 }}
    >
      {children}
    </motion.div>
  );
};

export { ScrollTop, PageTransitionWrapper };
