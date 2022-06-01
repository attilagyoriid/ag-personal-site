import TitleSection from "../titleSection/titleSection";
import { useEffect } from "react";
import classes from "./credo.module.scss";
import QuotationCard from "../quotationCard/quotationCard";


export default function Credo() {

  useEffect(() => {
   
  }, []);
  return (
    <section className={classes["main-credo"]}>
      <TitleSection
        title="credo"
        subText=""
        className="lead--deep-dark-color"
      />
      <div className={classes["credo-section"]}>


        <div className={classes["text-section"]}>
          <QuotationCard />
        </div>
        
      </div>
    </section>
  );
}

