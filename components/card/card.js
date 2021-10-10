/** @format */
import classes from "./card.module.scss";
export default function Card(props) {
  return (
    <div>
      <article className={`${classes["content-box"]}`}>
        <div className={classes.inner}>
          <img
            className={`${classes["content-box-thumb"]}`}
            src='/images/services_robot.svg'
            alt='Test Automation'
          />
          <h1 className={`${classes["content-box-header"]}`}>
            Test Automation
          </h1>
          <p className={`${classes["content-box-blurb"]}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            risus, a laoreet sit condimentum nisl quis amet nascetur. Sagittis,
            purus auctor vivamus nibh sit nisi enim. Lacus laoreet pulvinar cras
            eget magna eu pellentesque elementum porttitor. Vitae tempus viverra
            risus in ullamcorper etiam ut.
          </p>
        </div>
      </article>
    </div>
  );
}

export function getStaticProps(context) {
  console.log(context);
  const say = { one: "hello" };
  return {
    props: { say },
  };
}
