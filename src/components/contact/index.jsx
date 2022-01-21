import React from "react";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Contact = () => {
    return (
        <Parallax pages={2} >
            <ParallaxLayer
                offset={0}
                speed={3}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ContactIntro />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={3} style={{ backgroundColor: '#ff3535', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <ContactForm />
            </ParallaxLayer>
        </Parallax>
    );
};

export default Contact;
