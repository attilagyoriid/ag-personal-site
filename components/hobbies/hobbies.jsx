import TitleSection from "../titleSection/titleSection";
import { useEffect } from "react";
import classes from "./hobbies.module.scss";


export default function Hobbies() {

  useEffect(() => {
   
  }, []);
  return (
    <section className={classes["main-hobbies"]}>
      <TitleSection
        title="in my spare time"
        subText="Seasoned Software Developer with more than 19 years experience and passion for visual design and creative creation"
        className="lead--deep-dark-color"
      />
      <div className={classes["hobbies-section"]}>
        <div className={classes["img-section"]}>
          <img src="/images/illustration-hobbies.png" alt="Hobbies illustration" />
        </div>

        <div className={classes["text-section"]}>
          <p>
          Not a Yet Another Average Software Engineer.
          I'm passionate about bringing both the technical and visual aspects of digital products to life.
          I’ve always been someone who has both a creative and a logical side.
          I realized it would be the perfect fit. I could use my creative side to design and my logical side to code.    
          I am a Software Test Automation Framework Developer and a Full-stack Engineer with over 19 years of Information Technology related experience. 
          Sometimes I am also get involded in activites such as digital multimedia & ui design, graphic craftsmanship, and team management. 
          I maintain a passion for technology and helping others get the most out of technology by using the appropriate tools, techniques, and strategies to ensure clients satisfaction.
          Regarding the last 4 years I am functioning as a Development Team Lead as well.
          </p>

        </div>
      </div>
    </section>
  );
}

