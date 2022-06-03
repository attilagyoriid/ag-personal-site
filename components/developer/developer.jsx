import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from 'react-lottie';
import developer_animation from "./developer_animation.json";
import classes from "./developer.module.scss";
export default function Developer() {
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
      delay: 2,
    });
    gsap.from(devImgContainerRef.current, {
      scrollTrigger: devImgContainerRef.current,
      autoAlpha: 0,
      x: 200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 2,
    });
  }, []);
  return (
    <div className={classes["dev__container"]}>
      <div className={classes["dev_text"]} ref={devTextRef}>
        <div className={classes["dev_text__container"]}>
          <div className={classes["dev_text"]}>
          I love sofware development or any creative activity: Creating Something out of Nothing!
          I have been working with technology for as long as I can remember.
          I am eager to embrace new ideas, methodologies and technologies to expand my knowledge.
          I maintain a passion for technology and helping others get the 
          most out of technology by using the appropriate tools, techniques, and strategies to ensure clients satisfaction.
          I have a passion for constantly challenging myself and learning new skills that I can apply to both work and everyday life. 
          I have been involved in developing and testing backend services, apis, web and desktop applications, or implementing test automation frameworks helping other Engineers
          to test their features delivered
          My main experience is in Back-end development and Software QA, espacially in Software Quality Life Cycle, process formation & improvements and most of all Test Automation at all levels. But REgarding the last 3 years
          I have gotten aquanted with front-end technolgies as well, such as HTML, CSS, Sass, Javascript, Typescript, ReactJs and NextJs. 
          I enjoy getting to know a business, its goals, Postions with roles and respos and SDLC processes and workflows at the current company / customer, in the possesion of those information I can find the proper way 
          how I can best apply myself to the business / company I am working for.
          Iam a big advocate of reusable and maintainable easy to read and understand code, and I beleive in the applicability of clean code.
          Implementing a function is not enought, it must be maintainable, extensible, self-documenting and future-proof. So the software QA and automated regression test set is not 
          something to forget about in the face of time or budge constraint, it would like building a house without proper foundation. In the 21th century it industry there are no such attitudes like "it is just test",
          Nooo, it is the organic part of the implemented functionality. Without proper safe-guard, nothing guarantees that the code will withstand the test of time! At the end of the day the customer satisfaction what really matters,
          and without rock-solid code base, you wont be able to react the customers needs delivering new and new releases that they are willing to pay for.
          </div>
        </div>
      </div>
      <div className={classes["dev_img__container"]} ref={devImgContainerRef}>
      
        <div className={classes["dev_img--lead"]}>being a developer...</div>
        <div className={classes["dev_img"]}>
        <Lottie options={defaultOptions}
              height={500}
              width={500} />
        </div>
      </div>
      
    </div>
  );
}
