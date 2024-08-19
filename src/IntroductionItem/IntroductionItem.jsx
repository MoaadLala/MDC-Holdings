import './IntroductionItem.css';
import { motion } from 'framer-motion';

export default function IntroductionItem({ title, bgImg, children }) {
    return (
        <motion.div 
            className="IntroductionItem"
            initial={{
                opacity: 0,
                y: 100,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                ease: 'easeIn',
                duration: .6,
            }}
            viewport={{
                margin: "-150px",
                once: true,
            }}
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="IntroductionItem-Container">
                <hr className='Stretchbar'/>
                <h1>{title}</h1>
                <ul>
                    {children}
                </ul>
            </div>
        </motion.div>
    )
}