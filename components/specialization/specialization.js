/** @format */
import classes from "./specialization.module.scss";
export default function SpecializationSection() {
  return (
    // <section id='home-a' class='text-center py-2'>
    <section className={`${classes.specialization_section}`}>
      <div class='container'>
        <h2 class='section-title'>I Specialize In</h2>
        <div class='bottom-line'></div>
        <p class='lead'>
          Photography as well as creating digital masterpieces and UI/UX layouts
          for websites and mobile applications
        </p>
        <div class='specials'>
          <div>
            <i class='fas fa-file-alt fa-2x'></i>
            <h3>Concepting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem.
            </p>
          </div>
          <div>
            <i class='fas fa-desktop fa-2x'></i>
            <h3>UI/UX</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem.
            </p>
          </div>
          <div>
            <i class='fas fa-object-ungroup fa-2x'></i>
            <h3>Visual Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem.
            </p>
          </div>
          <div>
            <i class='fas fa-thumbs-up fa-2x'></i>
            <h3>Interaction</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
