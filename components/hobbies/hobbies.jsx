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
        subText="outside of my working life"
        className="lead--deep-dark-color"
      />
      <div className={classes["hobbies-section"]}>
        <div className={classes["img-section"]}>
          <img src="/images/illustration-hobbies.png" alt="Hobbies illustration" />
        </div>

        <div className={classes["text-section"]}>
          <p>
            I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences.
            I do beleive in work-life balance. You cant succeed if you concentrate on one aspect of life only. 
            Since private life is the main mitovation driver for excell at work, it could be also a source of inspiration for work, 
            and vica-versa.
            I think it’s important to get regular screen downtime, so when I’m not pushing pixels or coding, 
            you’ll find me working on my film ideas, 3d model and screewriting, tending to my garden and many house plants, 
            cooking up one of my favourite dishes, or hanging out with friends and family.
            I am reading a lot, it is a seance of my bed time to read some pulp fiction,or books on topics like sociology or psychology.
            I've also trying my hand at playing the guitar time and time again... Lets say I am not a natural born talent &#128516; and I love singing too.
            I have a serious passion for movies so I watch lots of films and series - I am a real movie junkie.
            
            I love travelling and taking photos, this is the mere essence of being for me getting acquanted with different cultures and people, making new friendships, 
            sightseeing beautiful architecures and the miracle of nature. I also regularly do some sport, soccer, table tennis, biking or just stop by the gym. 
            I love pets and I have a dog, a Havanese Bichion called "Whopper".
            And of course I use my free time to learn or try new things.
            My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. 
            I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
          </p>

        </div>
      </div>
    </section>
  );
}

