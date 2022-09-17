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
            I also believe a healthy work-life balance is important. You can't succeed if you concentrate on one aspect of life only. 
            Since achieving a quality private life is the main motivational factor in professional excellence, it may also be a source of inspiration for work, and vice-versa.
            I believe it is important to get regular downtime away from screens, so when I am not pushing pixels or coding, you can find me working on my film ideas, 3d modeling, 
            screenwriting, tending to my garden and many houseplant, cooking one of my favorite dishes, or hanging out with friends and family.
            I am reading a lot, and it is part of my regular bedtime routine to read some pulp fiction or books on topics like sociology or psychology.
            I also have been trying my hand at playing guitar, but let's just say I am not a natural-born talent &#128516; I love singing as well.
            I have a serious passion for movies and television, so I am frequently binge-watching.
            
            I love to travel and to take photos, this is the mere essence of being for me becoming acquanted with different cultures and people, making new friendships, 
            and taking in beautiful architecture and the miracle of nature.  I also regularly engage in sports like soccer, table tennis, biking or just stopping by the gym.
            I love animals, particularly my Havanese Bichon dog named Whopper.
            Of course, I also like to use my spare time to learn or try new things.  My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study, and artistic endeavors.    
            I am a fast learner, and am able to pick up new skills, and juggle different projects and roles with relative ease. 
          </p>
        </div>
      </div>
    </section>
  );
}

