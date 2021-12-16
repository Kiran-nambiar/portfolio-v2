import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import AboutIntro from './AboutIntro';
import AboutDeveloper from './AboutDeveloper';
import { useRef } from 'react';

const About = () => {
    const parallax = useRef(null);
    return (
        <Parallax ref={parallax} pages={2} >
            <ParallaxLayer
                offset={0}
                speed={3}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AboutIntro />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={3} style={{ backgroundColor: '#ff3535', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <AboutDeveloper />
            </ParallaxLayer>
        </Parallax>
    )
}

export default About;
