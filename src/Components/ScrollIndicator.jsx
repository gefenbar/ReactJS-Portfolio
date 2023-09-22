import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollingRunningIndicator = () => {
    const [scrollYProgress, setScrollYProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollYProgress = scrollY / document.body.scrollHeight;
            setScrollYProgress(scrollYProgress);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            style={{
                width: "100%",
                height: "4px",
                backgroundColor: "black",
                position: "fixed",
                bottom: "0px",
                left: "0px",
                transform: `scaleX(${scrollYProgress})`,
            }}
        />
    );
};

export default ScrollingRunningIndicator;
