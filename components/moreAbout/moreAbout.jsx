import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ImgGallery from "../imgGallery/imgGallery";
import classes from "./moreAbout.module.scss";
import TextCarousel from "../text-carousel/textCarousel";
import { chunkSubstrBySegments } from "../../utils/textManipulator";
export default function MoreAbout() {
  const text = `
  Goals and Motivations: I am really interested in those domains solving everyday peoples' problems (coming from different domain than IT especially), software solutions that are customer facing.
  This way I have a chance to learn another business domain a bit - or more 😆. When we talking about a company, an employer, I am always looking for a good community,
  making new friendships, finding - how shell I put it, a "second family"... after all you spend a significant part of your life with your colleague.
  I am also very open to relocate. It would open an a brand new perspective to get aquanted with different cultures.
  Special power: I am quite multi-sided, ployglot person, and I consider myself an involving leader to whom your opinion really matters, a so called "servant leader".
  Due to this aspect of my attitude and my great network in the industry I could easly ramp-up a team of 5-7 great professionals whitin a few month,
  professionals I worked with in mutual trust and respect and sharing the willingness to work together again in the future.
  Characteristics: I am creative and a pro-active self-starter, love learning new things, meeting new people. 
  I am loyal - not really a job-hopper, and quite straightforward loving absurd humor. I am quite attentive and involving, open for other opinions.
  If I dont understand something, well I am persistent, and dont easily give up on finding the solution.
  Future perspectives: 
  In a long run I imagine myself as an Engineering manager or a Line manager (not distancing totally away from technology 
  - a 30%-70% ration / hands-on - people management could be ideal), puting and keeping teams together, making their job and thereby their life
  as motivated and fruitful as possible.
    
  and now it is show time. Let me share some picture with you from my past - cause I dont have any from my future yet 😀
  From the very beginning  when I took my first baby-steps, through the years when I started coding before the age of ten, 
  on a computer called Videoton TV computer in Basic language (with tape drive plugged to a Black&White TV ). 
  There came Commodore Plus 4, then Commdore 64 with Blue Chip 5.25 Disk Drive, then the first 
  XT 286 with , and AT 486, and Pentium with CGA and VGA monitors 😆 wowww, this is a history 😀 installing 
  windows 3.11 coming on 6 1.44MB 3.5″ 
  floppy disc ( my favourite disk brand was "noname" 😂 ), 
  at that time I got familiar with Quick Basic, Turbo Pascal, and with the big game changer: Delphi 😀
  Ohh I am getting old.. but who isnt? 😄 (Vampires and Christopher Lambert). But aside IT, of course most importantly let me present some insight 
  into my everyday life.
  feel free to browse through`
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
            <ImgGallery />
          </div>
        </div>
      </div>
    </div>
  );
}
