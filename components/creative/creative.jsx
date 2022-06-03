import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from 'react-lottie';
import designer_animation from "./designer_animation.json";
import classes from "./creative.module.scss";
export default function Creative() {
  const leaderTextRef = useRef(null);
  const leaderImgContainerRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: designer_animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    gsap.from(leaderTextRef.current, {
      scrollTrigger: leaderTextRef.current,
      start: "center center",
      autoAlpha: 0,
      x: -200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 2,

    });
    gsap.from(leaderImgContainerRef.current, {
      scrollTrigger: leaderImgContainerRef.current,
      start: "top center",
      autoAlpha: 0,
      x: 200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 2,
 
    });
  }, []);
  return (
    <div className={classes["leader__container"]}>
      
      
      <div className={classes["leader_text"]} ref={leaderTextRef}>
        <div className={classes["leader_text__container"]}>
          <div className={classes["leader_text"]}>
          I’ve always been someone who has both a creative and a logical side.
          I realized it would be the perfect fit. I could use my creative side to design and my logical side to code.
          I have always someone being attractive visually compelling creative activities. I love movies, photography and drawing as I can remember.
          Thats why I started learning web design using Figma, Photoshop and Illustrator. I have been taking photos with my Canon DSLR for 8 years now.
          I have also created some short films, and also edited so I am quite experienced in Adobe Premiere Pro and After Effects. And as 
          for the last 3 years I have led off to the journey of 3D modeling learning Maya And Zbrush. Maybe back then thats why I attended another collage for the second time 
          and received a 2nd dimploma in marketing communication - although I never worked in this area. But this knowledge has turned out useful in my IT career as well.
          And to come to full circle I have started self-studying front-end development 3 years ago to put into functional form I have designed, so I have some experience in 
          javascript, typescript, html, css, sccs, and frameworks like react and nextjs being able to deliver and e2e sofware solution if needed.
          I'm passionate about bringing both the technical and visual aspects of digital products to life.
          I'm happiest when I'm creating, learning, exploring and thinking about how to make things better. I am well-rounded curious individual hungry for
          knowledge and passionet to learn. I do believe in "Lifelong learning". 
          “Once you stop learning, you start dying.” – Albert Einstein     
          </div>
        </div>
      </div>
      <div className={classes["leader_img__container"]} ref={leaderImgContainerRef}>
      
        <div className={classes["leader_img--lead"]}>being a creative...</div>
        <div className={classes["leader_img"]}>
          <Lottie options={defaultOptions}
                height={700}
                width={700} />
        </div>
      </div>
    </div>
  );
}
