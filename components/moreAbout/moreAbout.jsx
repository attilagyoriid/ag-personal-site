import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ImgGallery from "../imgGallery/imgGallery";
import classes from "./moreAbout.module.scss";
import TextCarousel from "../text-carousel/textCarousel";
import { chunkSubstrBySegments } from "../../utils/textManipulator";
export default function MoreAbout({isIOS}) {
  const text = `
  <h4>Goals and Motivations:</h4> I have a strong interest in all aspects of how professional services may assist in problem solving for everyday people (beyond just the IT solutions) software solutions that are customer facing.
  This way I have a chance to learn another business domain a bit - or more 😆. When we talking about a company, an employer, I am always looking for a good community,
  making new friendships. My ideal employer would foster a strong sense of community amongst its employees, as co-workers often become friends and/or a "second family", after all you spend a significant part of your life with your colleague.
  I am also very open to relocation for the right position, as I greatly enjoy meeting new people, new experiences, and becoming acquainted with new cultures.  I am easily adaptable and love new adventures.
  <h4>Special power:</h4> Due to my diverse interests and adaptability, I am a very involving, hands-on leader - "servant leader" - who values the ideas and opinions of my team.  
  As a result, I have maintained a large network of individuals within the industry, 
  and could easily amass a team of 5-7 outstanding professionals for any project or assignment.  These individuals are people I have successfully worked with previously, 
  with whom I have mutual trust, respect, and a willingness to collaborate again in the future.
  <h4>Characteristics:</h4>I am a creative and proactive self-starter.  love learning new things and meeting new people.
  I am a very loyal employee, and do not just hop from one job to the next.  I am very straight-forward and I love absurd humor. I am quite attentive and involving, open for other opinions.
  I am very attentive and involved.  I enjoy collaboration, and am open to the ideas and opinions of others.  I am determined, persistent, and driven - if I don't know something, I won't stop until I find the answer.
  <h4>Future perspectives:</h4>
  My future career goal is to become either an engineering manager or a line manager.  
  While I am not seeking to move 100% away from technology, a 70/30 split of employee management and technology would be ideal for my skill set, with an emphasis on team creating, collaboration, motivation,
  making their job and thereby their life as motivated and fruitful as possible.
  <h4>and now it is show time...</h4> Let me share some picture with you from my past - as I don't have any from my present yet 😉
  from the very beginning when I took my first baby steps, through the years when I began coding before I was 10, 
  I began my coding experience on a Videoton TV computer in Basic language, with a tape drive plugged into a black & white TV.  
  Thereafter came a Commodore Plus 4, then a Commodore 64 with Blue Chip 5.25 disk drive, next the first XT 286.
  After that, I moved onto an AT 486, and from there to a Pentium with GCA and VGA montorits, with windows 3.11 installed with 6 1.44MB 3.5 inch floppy disks -
  wow, what a history!
  As an aside, my favorite disk brand was "noname" at that time 😂 , 
  At that time I got familiar with Quick Basic, Turbo Pascal, and with the big game changer: Delphi 😀
  I am aging myself, but we are all getting older, correct? 😄 (Except maybe vampires and Christopher Lambert), but I digress... Beyond my IT history, please allow the selected photographs to present 
  some insight into my everyday life.  Feel free to browse through.`
  const textContent = chunkSubstrBySegments(text,2);
  const moreTextRef = useRef(null);
  const moreGalleryRef = useRef(null);
  useEffect(() => {
    gsap.from(moreTextRef.current, {
      scrollTrigger: moreTextRef.current,
      autoAlpha: 0,
      x: -200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 0.5,
    });
    gsap.from(moreGalleryRef.current, {
      scrollTrigger: moreGalleryRef.current,
      autoAlpha: 0,
      y: 200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 0.5,
    });
  }, []);
  return (
    <div className={classes["more__container"]}>
      <div className={classes["more_text__container"]} ref={moreTextRef}>
        <div className={classes["more_text--lead"]}>more about.</div>
          <TextCarousel texts={textContent}/>
      </div>
      <div className={classes["more_gallery"]} ref={moreGalleryRef}>
        <div className={classes["more_gallery__container"]}>
          <div className={classes["img_gallery"]}>
            <ImgGallery isIOS = {isIOS}/>
          </div>
        </div>
      </div>
    </div>
  );
}
