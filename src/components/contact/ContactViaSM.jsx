import fb from "../../assets/images/fb.svg";
import ig from "../../assets/images/ig.svg";
// import btnLoader from "../../assets/images/btn-loader.svg";
import gmail from "../../assets/images/gmail.svg";
import linkedin from "../../assets/images/linkedin.svg";
import { Grid } from "@mui/material";

const ContactViaSM = () => {
    return (
        <Grid marginTop={5} container item sm={12}>
            <Grid className="social-icons">
                <a
                    href="https://www.facebook.com/kiran.nambiar3/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social-media-section">
                        <img className="social-media" src={fb} alt="" />
                        <p className="mt-2 paragraph">Facebook</p>
                    </div>
                </a>
            </Grid>
            <Grid className="social-icons">
                <a
                    href="https://www.instagram.com/abaddon_namby/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social-media-section">
                        <img className="social-media" src={ig} alt="" />
                        <p className="mt-2 paragraph">Instagram</p>
                    </div>
                </a>
            </Grid>
            <Grid className="social-icons">
                <a href="mailto: kirannambiar12@gmail.com">
                    <div className="social-media-section">
                        <img className="social-media" src={gmail} alt="" />
                        <p className="mt-2 paragraph">Gmail</p>
                    </div>
                </a>
            </Grid>
            <Grid className="social-icons">
                <a
                    href="https://www.linkedin.com/in/kiran-nambiar-a48195152/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social-media-section">
                        <img className="social-media" src={linkedin} alt="" />
                        <p className="mt-2 paragraph">Linkedin</p>
                    </div>
                </a>
            </Grid>
        </Grid>
    )
};

export default ContactViaSM;
