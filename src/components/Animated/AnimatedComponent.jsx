import { motion } from "framer-motion";
import { useLocation} from "react-router-dom";
import PropTypes from "prop-types";

export const PageTransition = ({ children }) => {
    const location = useLocation();
    return (      
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

PageTransition.propTypes = {
    children: PropTypes.node
}