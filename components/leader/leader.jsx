import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from "react-lottie";
import leader_animation_data from "./leader_animation.json";
import classes from "./leader.module.scss";
import TextCarousel from "../text-carousel/textCarousel";
import { chunkSubstrBySegments } from "../../utils/textManipulator";
export default function Leader() {
  const leader_animation = JSON.parse(JSON.stringify(leader_animation_data));
  const text = `At this point in my career, I have been working as a development team lead for more than 7 years.   I have always been a kind of "leader", and people have organically looked to me 
  for leadership since I was in primary school.  I currently lead a team of test automation framework engineers.  In my role as team lead, I establish code standards, 
  perform coding and code review, mentor team members, give feedback and recommendations on architectural issues, facilitate scrum ceremonies, and performing general, behind-the-scenes tasks.  
              
  Leading development efforts in agile/scrum environment with CI/CD automation mindset and DevOps culture, 
  organizing and distributing tasks and workloads considering and planning with the current resources. 
  Additionally, as a team lead I also conduct and assist with technical interviews 
  and am personally responsible for recruiting many of the current engineers in the Release and Verification Department. I also organize training, assist team members in 
  determining and achieving their professional career goals, and undertake regular performance reviews. 
  My main objective as a leader is to effectively 
  maintain the professional motivation and inspiration of my team, through reinforcing their value to the corporation, by celebrating their achievements, 
  and instilling a sense of purpose in them, I do beleive these are the things really matter.
  
  My leadership style can be best described as "people come first". Without trust, respect, and a solid foundation, 
  it is impossible to create anything of value.
  I have found that helping others to grow and work to achieve their goals is one of the most rewarding things in life. 
  I also studied psychology, pedagogy and didactics at college for 4 years which really helps me in working effectively with individuals and teams 
  (of course this fact doesnt make me a psychologist though &#128516;)
  I consider myself a hands-on, involving leader, a so called "servant leader", who sincerely values the ideas and opinions of my team members.
  As a result of my management style, and my extensive professional network within the industry,  I could easily gather a team of 5 - 7 outstanding professionals,
  whom I have worked with in mutual trust and respect and sharing the willingness to work together again in the future.`;

  const textContent = chunkSubstrBySegments(text, 2);
  const leaderImgRef = useRef(null);
  const leaderTextContainerRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: leader_animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
          <Lottie options={defaultOptions} />
        </div>
      </div>
      <div className={classes["leader_text"]}>
        <div
          className={classes["leader_text__container"]}
          ref={leaderTextContainerRef}
        >
          <TextCarousel texts={textContent} />
        </div>
      </div>
    </div>
  );
}
