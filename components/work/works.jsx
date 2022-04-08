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
          <div className={classes["item"]}>
            <div className={classes["item-image"]}>
              <img src="/images/works/item1.png" alt="" />
            </div>
            <div className={classes["item-text"]}>
              <div className={classes["item-text-wrap"]}>
                <p className={classes["item-text-category"]}>Design</p>
                <h2 className={classes["item-text-title"]}>Great Gradients</h2>
              </div>
            </div>
          </div>
          <div className={classes["item"]}>
            <div className={classes["item-image"]}>
              <img src="/images/works/item2.png" alt="" />
            </div>
            <div className={classes["item-text"]}>
              <div className={classes["item-text-wrap"]}>
                <p className={classes["item-text-category"]}>UI/UX</p>
                <h2 className={classes["item-text-title"]}>World Experience</h2>
              </div>
            </div>
          </div>
          <div className={classes["item"]}>
            <div className={classes["item-image"]}>
              <img src="/images/works/item3.png" alt="" />
            </div>
            <div className={classes["item-text"]}>
              <div className={classes["item-text-wrap"]}>
                <p className={classes["item-text-category"]}>
                  Photography & Design
                </p>
                <h2 className={classes["item-text-title"]}>Vanishing</h2>
              </div>
            </div>
          </div>
          <div className={classes["item"]}>
            <div className={classes["item-image"]}>
              <img src="/images/works/item4.png" alt="" />
            </div>
            <div className={classes["item-text"]}>
              <div className={classes["item-text-wrap"]}>
                <p className={classes["item-text-category"]}>Design</p>
                <h2 className={classes["item-text-title"]}>Gap INC</h2>
              </div>
            </div>
          </div>
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
                  Face THe Experience
                </h2>
              </div>
            </div>
          </div>
          <div className={classes["item"]}>
            <div className={classes["item-image"]}>
              <img src="/images/works/item6.png" alt="" />
            </div>
            <div className={classes["item-text"]}>
              <div className={classes["item-text-wrap"]}>
                <p className={classes["item-text-category"]}>Design Concept</p>
                <h2 className={classes["item-text-title"]}>Bezier Curves</h2>
              </div>
            </div>
          </div>
          <div className={classes["item"]}>
            <div className={classes["item-image"]}>
              <img src="/images/works/item7.png" alt="" />
            </div>
            <div className={classes["item-text"]}>
              <div className={classes["item-text-wrap"]}>
                <p className={classes["item-text-category"]}>Photography</p>
                <h2 className={classes["item-text-title"]}>Dock Ponder</h2>
              </div>
            </div>
          </div>
          <div className={classes["item"]}>
            <div className={classes["item-image"]}>
              <img src="/images/works/item8.png" alt="" />
            </div>
            <div className={classes["item-text"]}>
              <div className={classes["item-text-wrap"]}>
                <p className={classes["item-text-category"]}>
                  Web Applications
                </p>
                <h2 className={classes["item-text-title"]}>Restaurant App</h2>
              </div>
            </div>
          </div>
          <div className={classes["item"]}>
            <div className={classes["item-image"]}>
              <img src="/images/works/item9.png" alt="" />
            </div>
            <div className={classes["item-text"]}>
              <div className={classes["item-text-wrap"]}>
                <p className={classes["item-text-category"]}>
                  Social Network Concept
                </p>
                <h2 className={classes["item-text-title"]}>FriendFeed</h2>
              </div>
            </div>
          </div>
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
    </section>
  );
}
