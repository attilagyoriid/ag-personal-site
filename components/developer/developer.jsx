import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from 'react-lottie';
import developer_animation_data from "./developer_animation.json";
import classes from "./developer.module.scss";
import TextCarousel from "../text-carousel/textCarousel";
import { chunkSubstrBySegments } from "../../utils/textManipulator";
export default function Developer() {
  const developer_animation = JSON.parse(JSON.stringify(developer_animation_data));
  const text = `I love sofware development or and creativity: Creating Something out of Nothing!
  I have been working with technology as far as i can remember.
  I am eager to embrace new ideas, methodologies and technologies to expand my knowledge.
  I maintain a passion for technology and for helping others get the 
  most out of technology by using the appropriate tools, techniques, and strategies to ensure clients satisfaction.
  I enjoy constantly challenging myself and learning new skills that may be applied to both work and everyday life.
  I have been involved in developing and testing backend services, apis, web / desktop applications, along with implementing test automation frameworks helping other Engineers
  to test their features delivered.
  My primary professional experience is in back-end development and software QA, especially Software Quality Life Cycle, processing formations and improvements, and particularly Test Automation at all levels. Over the past 3 years, 
  I have become more familiar and comfortable with front-end technologies, like HTML, CSS, Sass, Javascript, Typescript, ReactJs and NextJs. 
  I truly enjoy learning the client's business, its goals, the manner of its positions, roles, and SDLC/STLC processes and workflows at the current company / customer. 
  Through that understanding, I am able to determine the proper manner in which I may best apply my skills to fit the client's needs. 
  I am a big advocate of reusable and maintainable easy to read and understand code, and I beleive in the applicability of clean code.
  Implementing mere functionality is not sufficient, it must be maintainable, extensible, self-documenting and future-proof. As such, the software QA process and automation regression test set is not to be ignored in light of time or budget constraints. 
  To do so would be akin to building a house without the proper foundation. In the 21th century in IT industry, software QA cannot be merely viewed as "just a test", 
  Rather, it is an integral part of  the intended, implemented functionality. Only with the proper safe-guards in place, will quality code stand the test of time! At the end of the day the customer satisfaction what really matters,
  and without rock-solid code base, you wont be able to react customers needs, delivering new and new releases they are willing to pay for.`
  const textContent = chunkSubstrBySegments(text,2);
  const devTextRef = useRef(null);
  const devImgContainerRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: developer_animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    gsap.from(devTextRef.current, {
      scrollTrigger: devTextRef.current,
      autoAlpha: 0,
      x: -200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 1,
    });
    gsap.from(devImgContainerRef.current, {
      scrollTrigger: devImgContainerRef.current,
      autoAlpha: 0,
      x: 200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 1,
    });
  }, []);
  return (
    <div className={classes["dev__container"]}>
      <div className={classes["dev_text"]} ref={devTextRef}>
        <div className={classes["dev_text__container"]}>
            <TextCarousel texts={textContent}/>
        </div>
      </div>
      <div className={classes["dev_img__container"]} ref={devImgContainerRef}>
      
        <div className={classes["dev_img--lead"]}>being a developer...</div>
        <div className={classes["dev_img"]}>
          <Lottie options={defaultOptions}/>
        </div>
      </div>
      
    </div>
  );
}
