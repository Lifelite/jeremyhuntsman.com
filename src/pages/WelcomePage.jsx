import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import TextBlock from "../components/TextBlock.jsx";
import FadeInView from "../components/FadeInView.jsx";

export const WelcomePage = () => {
    return (
        <>
            <Parallax pages={2} style={{ top: '0', left:'0'}} className="animation">
                <ParallaxLayer offset={0} speed={0}>
                    <div className="animation_layer parallax" id="starback"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.3}>
                    <div className="animation_layer parallax" id="deathstar"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.3}>
                    <div className="animation_layer parallax" id="enterprise"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.1}>
                    <div className="animation_layer parallax" id="atlantabackground"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.15}>
                    <div className="animation_layer parallax" id="name"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.0}>
                    <div className="animation_layer parallax" id="jeremy"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.25}>
                    <div className="animation_layer parallax" id="atlantaforeground"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.999} speed={0.25}>
                    <div className="animation_layer parallax" id="transitionblock">

                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0}>
                    <FadeInView>
                        <TextBlock />
                    </FadeInView>
                </ParallaxLayer>
            </Parallax>
        </>
    )
}