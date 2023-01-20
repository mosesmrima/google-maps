import { motion, AnimatePresence } from "framer-motion";
import {useState} from "react";
import Map from "./Map.jsx";
import "./App.css"


export default function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>Open Map</button>

            <AnimatePresence>
                {isModalOpen && (
                    <>
                        <motion.div
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className={"backdrop"}
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className={"modal"}
                        >
                            <div className={"map-cont"}>
                                <Map/>
                            </div>
                            <button onClick={() => setIsModalOpen(false)}>Close Map</button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}