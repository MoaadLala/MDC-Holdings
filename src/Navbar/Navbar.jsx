import './Navbar.css';
import FullLogo from '../images/FullLogo.png';
import Logo from '../images/Logo.png';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [smallScreenHypersVisible, setSmallScreenHypersVisible] = useState(false);
    const smallMenuRef = useRef(null);
    
    const toggleSmallScreenNavbar = () => {
        setSmallScreenHypersVisible(!smallScreenHypersVisible);
    }

    const variants = {
        open: { opacity: 1, height: smallMenuRef.current ? smallMenuRef.current.scrollHeight : 'auto', transition: { duration: 0.5 } },
        closed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
    };

    return (
        <nav className='Navbar'>
            <div className="Navbar-LargeScreen">
                <img src={FullLogo} alt="" width={300} />
                <div className="Navbar-Hypers">
                    <a href="#WhoWeAre">Who are we</a>
                    <a href="#WhatWeDo">What we do</a>
                    <a href="#ContactUs" className='Btn-Yellow'>Contact us</a>
                </div>
            </div>
            <div className="Navbar-SmallScreen">
                <div className="Navbar-SmallScreen-Top">
                    <img src={Logo} alt="" width={100} />
                    <button onClick={toggleSmallScreenNavbar}>≡</button>
                </div>
                <motion.div 
                    ref={smallMenuRef}
                    className='Navbar-SmallScreen-Hypers' 
                    initial="closed"
                    animate={smallScreenHypersVisible ? "open" : "closed"}
                    variants={variants}
                >
                    <div>
                        <a onClick={toggleSmallScreenNavbar} href="#WhoWeAre">Who are we</a>
                    </div>
                    <div>
                        <a onClick={toggleSmallScreenNavbar} href="#WhatWeDo">What we do</a>
                    </div>
                    <div>
                        <a onClick={toggleSmallScreenNavbar} href="#ContactUs" className='Btn-Yellow'>Contact us</a>
                    </div>
                </motion.div>
            </div>
        </nav>
    )
}