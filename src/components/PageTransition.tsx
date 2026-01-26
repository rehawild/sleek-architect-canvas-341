import { motion, Variants } from "framer-motion";
import { ReactNode, Suspense } from "react";
import PageSkeleton from "./PageSkeleton";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.15,
        }}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </Suspense>
  );
};

export default PageTransition;
