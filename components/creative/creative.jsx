import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from 'react-lottie';
import designer_animation from "./designer_animation.json";
import classes from "./creative.module.scss";
import TextCarousel from "../text-carousel/textCarousel";
import { chunkSubstrBySegments } from "../../utils/textManipulator";
export default function Creative() {
  const text = ` I’ve always been someone who has both a creative and a logical side.
  I realized it would be the perfect fit. I could use my creative side to design and my logical side to code.
  I have always someone being attractive visually compelling creative activities. I love movies, photography and drawing as I can remember.
  Thats why I started learning web design using Figma, Photoshop and Illustrator. I have been taking photos with my Canon DSLR for 10 years now.
  I have also created some short films, and also edited them so I am quite experienced in Adobe Premiere Pro and After Effects. And as 
  for the last 3 years I have led off to the journey of 3D modeling learning Maya and Zbrush. Maybe back then thats why I attended another collage for the second time 
  and received a 2nd dimploma in marketing communication - although I never worked in this area. But this knowledge has turned out useful in my IT career as well.
  And to come to full circle I have started self-studying front-end development for 3 years now to put into functional form What I have designed, so I have some experience in 
  javascript, typescript, html, css, sccs, and frameworks like react and nextjs being able to deliver and e2e sofware solution if needed.
  I'm passionate about bringing both the technical and visual aspects of digital products to life.
  I am very interested in interactive media, and in an age of digital I believe bringing design to life with code is essential. 
  So, I specialise in a multi-disciplined approach to my work incorporating design and development.
  My work crosses a broad range of categories in the digital space, both from a design and a technical perspective. I believe in using the right tools for the job so don’t subscribe to following bandwagons.
  I'm happiest when I'm creating, learning, exploring and thinking about how to make things better. I am well-rounded curious individual hungry for
  knowledge and passionet to learn. I'm often referred to by many as a polyglot. I do believe in "Lifelong learning". 
  “Once you stop learning, you start dying.” – Albert Einstein`
  const textContent = chunkSubstrBySegments(text,2);
  const devTextRef = useRef(null);
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
      delay: 1,

    });
    gsap.from(leaderImgContainerRef.current, {
      scrollTrigger: leaderImgContainerRef.current,
      start: "top center",
      autoAlpha: 0,
      x: 200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 1,
 
    });
  }, []);
  return (
    <div className={classes["creative__container"]}>
            
      <div className={classes["creative_text"]} ref={leaderTextRef}>
        <div className={classes["creative_text__container"]}>
          <TextCarousel texts={textContent}/>
        </div>
      </div>
      <div className={classes["creative_img__container"]} ref={leaderImgContainerRef}>
      
        <div className={classes["creative_img--lead"]}>being a creative...</div>
        <div className={classes["creative_img"]}>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
}
