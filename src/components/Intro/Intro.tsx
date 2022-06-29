import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { FC, useEffect, useState } from 'react';
import { useUserContext } from '../../hooks/useContext';

const path = '../../assets/platformIcons';

const LIGHT = {
  apple: require('../../assets/platformIcons/apple_icon_blk.png'),
  android: require('../../assets/platformIcons/android_icon_blk.png'),
  cross_platform: require('../../assets/platformIcons/cross_platform_blk.png'),
}

const DARK = {
  apple: require('../../assets/platformIcons/apple_icon_wt.png'),
  android: require('../../assets/platformIcons/android_icon_wt.png'),
  cross_platform: require('../../assets/platformIcons/cross_platform_wt.png')
}

interface Props {
  name: 'apple' | 'android' | 'cross';
  theme: 'light' | 'dark';
}


export function Intro() {
  const { theme } = useUserContext();
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 960px)").matches
  );

  const IMAGES = theme === 'dark' ? DARK : LIGHT;

  useEffect(() => {
    window
      .matchMedia("(max-width: 960px)")
      .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <Container id="home">
      <div className="intro-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello There</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Welcome</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Reliable app solutions for any web and mobile platform</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay={0.5 * 1000}>
          <div className="item">
            <h2 className="caption">IOS</h2>
              <img src={IMAGES.apple} />
          </div>
          <div className="item">
            <h2 className="caption">Android</h2>
              <img src={IMAGES.android} />
          </div>
          <div className="item">
            <h2 className="caption">Cross Platform</h2>
              <img src={IMAGES.cross_platform} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p style={{fontSize: 32}}>Let's build something great together!</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" className="contact-button" delay={0.8 * 1000}>
        </ScrollAnimation>
      </div>
      <div className="intro-image">
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" delay={1 * 1000}>
          <img src={require("../../assets/introAnimation/background.png")} alt="interface" className="slide-img" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
