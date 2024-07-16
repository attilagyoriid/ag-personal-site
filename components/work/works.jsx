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
          <a
            target="_blank"
            href="https://www.behance.net/gallery/146571261/Personal-Coach-Logo"
            rel="noopener noreferrer"
          >
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
          <a
            target="_blank"
            href="https://github.com/attilagyoriid/algorithms-js"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/item2.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Javascript</p>
                  <h2 className={classes["item-text-title"]}>Algorithms</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/141240137/Puppy-in-fantasy-forest"
            rel="noopener noreferrer"
          >
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
          <a
            target="_blank"
            href="https://github.com/attilagyoriid/leetcode_python"
            rel="noopener noreferrer"
          >
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
          <a
            target="_blank"
            href="https://www.behance.net/gallery/185130511/Personal-Coach-Mobile-High-Fidelity-Design"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/item5.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>
                    Mobile UI Design
                  </p>
                  <h2 className={classes["item-text-title"]}>Linda Novai</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/attilagyoriid/restassured-testng-java"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/restassured.jpg" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Rest Assured</p>
                  <h2 className={classes["item-text-title"]}>
                    Rest API testing
                  </h2>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/attilagyoriid/leetcode_java"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/item7.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Java</p>
                  <h2 className={classes["item-text-title"]}>Algorithms</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/attilagyoriid/ag-personal-site"
            rel="noopener noreferrer"
          >
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
          <a
            target="_blank"
            href="https://github.com/attilagyoriid/selenium-java-spring-pom-cucumber"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/selenium.jpg" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Selenium</p>
                  <h2 className={classes["item-text-title"]}>UI Automation</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/attilagyoriid/cypress_pom_cucumber"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/cypress.jpg" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Cypress</p>
                  <h2 className={classes["item-text-title"]}>UI Automation</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/attilagyoriid/playwright_pom_cucumber"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/playwright.jpg" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Playwright</p>
                  <h2 className={classes["item-text-title"]}>UI Automation</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/185130989/Desktop-Landing-Page-Design-for-a-coach"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/item6.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>
                    Design Concept
                  </p>
                  <h2 className={classes["item-text-title"]}>Personal Coach</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=9U61mMOMjUk&ab_channel=ARCHICAD"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/gaso.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Graphisoft</p>
                  <h2 className={classes["item-text-title"]}>ArchiCAD</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=gZjAW7vGqsY&t=10s&ab_channel=HendrikVeugelers"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/ge.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>GE Healthcare</p>
                  <h2 className={classes["item-text-title"]}>Predix</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=xhCEn0o529U&t=39s&ab_channel=Ericsson"
            rel="noopener noreferrer"
          >
            <div className={classes["item"]}>
              <div className={classes["item-image"]}>
                <img src="/images/works/ericsson.png" alt="" />
              </div>
              <div className={classes["item-text"]}>
                <div className={classes["item-text-wrap"]}>
                  <p className={classes["item-text-category"]}>Ericsson</p>
                  <h2 className={classes["item-text-title"]}>
                    Expert Analytics
                  </h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className={classes["button-container"]}>
        <div className={classes["btn-light__container"]}>
          <Link href="/doc/Attila_Gyori_2024_7s.pdf">
            <a className={classes["btn-dark--outline"]} target="_blank">
              CV
            </a>
          </Link>
        </div>
        <div className={classes["btn-main__container"]}>
          <Link href="/contact">
            <a className={classes["btn-main"]}>Contact</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
