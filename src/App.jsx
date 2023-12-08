import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from "./components/TextBlock.jsx";


function App() {



  return (
      <div className="App">
          <Parallax pages={6} style={{ top: '0', left:'0'}} className="animation">
              <ParallaxLayer offset={0} speed={0}>
                  <div className="animation_layer parallax" id="starback"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={-0.3}>
                  <div className="animation_layer parallax" id="deathstar"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={-0.3}>
                  <div className="animation_layer parallax" id="enterprise"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.2}>
                  <div className="animation_layer parallax" id="atlantabackground"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={-0.1}>
                  <div className="animation_layer parallax" id="name"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.0}>
                  <div className="animation_layer parallax" id="jeremy"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.5}>
                  <div className="animation_layer parallax" id="atlantaforeground"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0.999} speed={0.5}>
                  <TextBlock />
              </ParallaxLayer>
          </Parallax>
      </div>
  )
}

export default App;
