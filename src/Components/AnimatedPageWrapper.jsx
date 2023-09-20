import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedPageWrapper({ children }) {
    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1 }} />

}

