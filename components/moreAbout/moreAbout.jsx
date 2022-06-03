import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ImgGallery from "../imgGallery/imgGallery";
import classes from "./moreAbout.module.scss";
export default function MoreAbout() {
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
        <div className={classes["more_text"]}>
        and now it is show time. Let me share some picture with you from my past - cause I dont have any from my future yet &#128516;
        From the very beginning  when I took my first baby-steps, through the years when I started coding before the age of ten, 
        on a computer called Videoton TV computer in Basic language (with tape drive plugged to a Black&White TV ). 
        There came Commodore Plus 4, then Commdore 64 with Blue Chip 5.25 Disk Drive, then the first 
        XT 286 with , and AT 486, and Pentium with CGA and VGA monitors &#128516; wowww, this is a history &#128516; installing windows 3.11 coming on 6 1.44MB 3.5″ 
        floppy disc ( my favourite disk brand was "noname" &#128514; ), 
        at that time I got familiar with Quick Basic, Turbo Pascal, and with the big game changer: Delphi &#128516;
        Ohh I am getting old.. but who isnt? &#128514; (Vampires and Christopher Lambert). But aside IT, of course most importantly let me present some insight 
        into my everyday life.
        feel free to browse through
        </div>
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
