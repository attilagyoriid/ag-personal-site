import classes from "./funFacts.module.scss";

export default function FunFacts() {
  return (
    <section className={classes["facts_container"]}>
      <div className={classes["facts__img_container"]}>
        <div className={classes["area"]}>
          <ul className={classes["circles"]}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <img src="/images/fun-facts.svg" alt="Few facts about me" />
      </div>
    </section>
  );
}
