import classes from "./quotationCard.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default function QuotationCard() {


  return (
    <section className={classes["main-quote-card"]}>
      <div className={classes["box"]}>
        <i className={`${classes["fas"]} ${classes["fa-quote-left"]} ${classes["fa2"]}`}>
          <FontAwesomeIcon className={classes["font-awsome"]} icon={faQuoteLeft} color="white" />
        </i>
        <div className={classes["text"]}>
          <i className={`${classes["fas"]} ${classes["fa-quote-right"]} ${classes["fa1"]}`}>
            <FontAwesomeIcon className={classes["font-awsome"]}  icon={faQuoteRight} color="white" />
          </i>
          <div>

            <p>Life is like riding a bicycle. To keep your balance, you must keep moving.</p>
            <p className={classes["author"]}>- Albert Einstein</p>
          </div>
        </div>
      </div>
    </section>
  );
}

