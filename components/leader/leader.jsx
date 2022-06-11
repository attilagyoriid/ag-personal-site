import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from 'react-lottie';
import leader_animation from "./leader_animation.json";
import classes from "./leader.module.scss";
import TextCarousel from "../text-carousel/textCarousel";
import { chunkSubstrBySegments } from "../../utils/textManipulator";
export default function Leader() {
  const text = `I have been a development team lead for more then 5 years now.
  I do not really want to appear to show off, 
  but I have always been the one to set the tone, and others tend to cosider me as a leader in some way since I can remember 
  (from the primary school on). I am a kind of a "natural born leader" 

  Currently I am a Team Lead to a team of Test Automation Framework engineers, establishing code standards, performing code reviews, coding, 
  mentoring, giving recommendations on architectural issues, facilitating scrum sceremonies, and doing behind-the-scenes operational work.
              
  Leading development efforts in agile/scrum environment with CI/CD automation mindset and DevOps culture, 
  organizing and distributing tasks and workloads considering and planning with the current resources. 
  As part of the Leader position I am attending technical interviews helping to recruit many of the engineers in the entire Release nad Verification Department, organizing trainings,
  helpint to form and achieve career goals and carry out and follow-up performance reviews. 
  My main objective as a Leader is to make and keep every member of
  my team motivated and insipred profesinally and personally providing the perception of being represented in the organization, being valuable assets with
  having a clear goal, a sense of progression and achievement and purpose in a production, I do beleive these are the things really matter.
  
  For me, people come first, without a solid foundation and trust it is impossible to create something valuable.
  Helping others to grow and achieve their goals is one of the most rewarding activities in life.
  I also studied psychology, pedagogy and didactics at college for 4 years which really helps me in working with individuals and teams 
  (of course this fact doesnt make me a psychologist though &#128516;)
  So I consider myself an involving leader to whom your opinion really matters, a so called "servant leader".
  Due to this aspect of my attitude and my great network in the industry I could easly ramp-up a team of 5-7 great professionals whitin a few month,
  professionals I worked with in mutual trust and respect and sharing the willingness to work together again in the future.`
  const textContent = chunkSubstrBySegments(text,2);
  const leaderImgRef = useRef(null);
  const leaderTextContainerRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: leader_animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    gsap.from(leaderImgRef.current, {
      scrollTrigger: leaderImgRef.current,
      autoAlpha: 0,
      x: -200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 1,
    });
    gsap.from(leaderTextContainerRef.current, {
      scrollTrigger: leaderTextContainerRef.current,
      autoAlpha: 0,
      x: 200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 1,
    });
  }, []);
  return (
    <div className={classes["leader__container"]}>
      
      <div className={classes["leader_img__container"]} ref={leaderImgRef}>
      
        <div className={classes["leader_img--lead"]}>being a leader...</div>
        <div className={classes["leader_img"]}>
          <Lottie options={defaultOptions}/>
        </div>
      </div>
      <div className={classes["leader_text"]} >
        <div className={classes["leader_text__container"]} ref={leaderTextContainerRef}>
          <TextCarousel texts={textContent}/>
        </div>
      </div>
      
    </div>
  );
}
