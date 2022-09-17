import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from 'react-lottie';
import designer_animation_data from "./designer_animation.json";
import classes from "./creative.module.scss";
import TextCarousel from "../text-carousel/textCarousel";
import { chunkSubstrBySegments } from "../../utils/textManipulator";
export default function Creative() {
  const designer_animation = JSON.parse(JSON.stringify(designer_animation_data));
  const text = ` I’ve always been someone with both creative and logical sensibilities.
  I discovered that it is a perfect fit to both of those sensibilities. I am able to use my creative talents to design, and by logical sensibility to code.
  I have historically been drawn to visually compelling creative activities. I have always enjoyed movies, photography, and drawing as I can remember.
  As such, I started to learn web design using Figma, Photoshop, and Illustrator. I have also been practicing photography with my Canon DSLR for about 10 years. 
  Through creating and editing a handful of short films, 
  I have gained extensive experience in using Adobe Premiere Pro and After Effects. Over the last few years, I have started to explore 3D modeling using Maya and Zbrush. 
  These interests may be why I decided to return to college for a 2nd degree in marketing communications, despite the fact that I have never formally worked in that area.  
  But, my knowledge of marketing communications has turned out useful in my IT career  to come to full circle I have started self-studying front-end development for 3 years now to put into functional form What I have designed, so I have become comfortable 
  using Javascript, Typescript, HTML, CCS, and SCSS, along with frameworks such as ReactJs and NextJs, 
  which enables me to deliver E2E software solutions, if necessary.
  I am passionate about bringing both technical and visual aspects of digit products to life.
  I am very interested in interactive media, and in the current digital age, bringing design to life with code is essential.
  Therefore, I specialize in a multi-disciplined approach to my work, 
  by incorporating both design and development.
  My work emcompasses a broad range of categories in the digital space, both from a design and technical perspective. I believe in using the right tools for the job. I do not subscribe to following trends or "jumping on the bandwagon.". 
  I am truly happiest when creating, learning, exploring and just generally thinking about ways to make things better. 
  I am a well-rounded and curious individual who is hungry for knowledge and has a passion to learn. 
  I'm often referred to by many as a polyglot. I do believe in "Lifelong learning". 
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
