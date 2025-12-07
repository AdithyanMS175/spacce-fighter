import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function InfiniteScroll({ images }) {
    const containerRef = useRef();
    const x = useMotionValue(0);     

    
    useAnimationFrame((t, dt) => {
        x.set(x.get() - dt * 0.03);   
        if (x.get() < -containerRef.current.scrollWidth / 2) {
            x.set(0);
        }
    });

    
    const handleWheel = (e) => {
        const value = x.get() - e.deltaY * 0.5; 
        x.set(value);
    };

    return (
        <div
            className="overflow-hidden py-10 bg-black"
            onWheel={handleWheel}
        >
            <motion.div
                ref={containerRef}
                style={{ x }}
                className="flex gap-10"
            >
                {images.map((src, i) => (
                    <img key={i} src={src} className="h-40 object-contain" />
                ))}
                {images.map((src, i) => (
                    <img key={i + '_dup'} src={src} className="h-40 object-contain" />
                ))}
            </motion.div>
        </div>
    );
}
