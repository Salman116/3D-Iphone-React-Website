import {heroVideo} from "../utils";  // Ensure that hmv is exported correctly from utils
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



const Hero = () => {
    useGSAP( () => {
        gsap.to('#hero_video', {
            delay:1.5,
            opacity:1
        })
    }, [])
    return (


        <div id="hero_video" className=" flex justify-center items-center flex-grow opacity-0">
        <video src={heroVideo}  autoPlay loop muted />
        </div>
    );
}

export default Hero;
