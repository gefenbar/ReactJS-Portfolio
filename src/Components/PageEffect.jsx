// PageEffect.js
import React from 'react';
import { motion } from 'framer-motion';

const pageEffectVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const PageEffect = ({ children }) => {
    return (
        <motion.div initial="hidden" animate="visible" variants={pageEffectVariants}>
            {children}
        </motion.div>
    );
};

export default PageEffect;
