/** @format */
import Link from "next/link";
import TitleSection from "../titleSection/titleSection";
import classes from "./works.module.scss";
import * as gtag from "../../services/gtag";
export default function Works() {
  const handleClick = (e) => {
    gtag.event({
      action: "project_visited",
      category: "Visit",
      label: "project_visited",
    });
  };

  return (
    <section id="work" className={classes["work-container"]}>
      <TitleSection
        title="PUBLIC PROJECTS"
        subText="Some of my public projects available"
        className="lead--deep-dark-color"
      />
      <div className={classes["container"]}>
        <div className={classes["items"]} onClick={handleClick}>
          <a target="_blank" href="/404" rel="noopener noreferrer">
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/item1.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Design</p>
                  <h2 className={classes["item-text-title"]}>Company Logo</h2>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" href="https://github.com/attilagyoriid/algorithms-js" rel="noopener noreferrer">
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/javascript_algo.jpg" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Javascript</p>
                  <h2 className={classes["item-text-title"]}>Algorithms</h2>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" href="https://www.behance.net/gallery/141240137/Puppy-in-fantasy-forest" rel="noopener noreferrer">
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/item3.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>
                    Photography & Design
                  </p>
                  <h2 className={classes["item-text-title"]}>Fantasy</h2>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" href="https://github.com/attilagyoriid/leetcode_python" rel="noopener noreferrer">
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/item4.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Python</p>
                  <h2 className={classes["item-text-title"]}>Algorithms</h2>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" href="/404" rel="noopener noreferrer">
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/item5.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>
                    Mobile UI Design
                  </p>
                  <h2 className={classes["item-text-title"]}>
                    Linda Novai
                  </h2>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" href="https://dribbble.com/shots/17981216-Desktop-Landing-Page-Design-for-a-coach" rel="noopener noreferrer">
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/item6.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Design Concept</p>
                  <h2 className={classes["item-text-title"]}>Personal Coach</h2>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" href="https://github.com/attilagyoriid/leetcode_java" rel="noopener noreferrer">
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/java_development.jpg" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Java</p>
                  <h2 className={classes["item-text-title"]}>Algorithms</h2>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" href="https://github.com/attilagyoriid/ag-personal-site" rel="noopener noreferrer">
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/item8.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>
                    Web Applications
                  </p>
                  <h2 className={classes["item-text-title"]}>Portfolio Site</h2>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" href="/404" rel="noopener noreferrer">
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/selenium.jpg" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>
                    Selenium
                  </p>
                  <h2 className={classes["item-text-title"]}>UI Automation</h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className={classes["button-container"]}>
        <div className={classes["btn-light__container"]}>
          <Link href="/doc/Attila_Gyori_2022.pdf">
            <a className={classes["btn-dark--outline"]} target="_blank">
              Resume
            </a>
          </Link>
        </div>
        <div className={classes["btn-main__container"]}>
          <Link href="/contact">
            <a className={classes["btn-main"]}>Contact</a>
          </Link>
        </div>
      </div>
    </section >
  );
}
