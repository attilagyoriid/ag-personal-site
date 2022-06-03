import classes from "./imgGallery.module.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/images/gallery/my_parents_opt.jpg",
    thumbnail: "/images/gallery/my_parents_opt.jpg",
    description: "My beloved parents and the baby me",
  },
  {
    original: "/images/gallery/new_sherrif_in_the_town_opt.jpg",
    thumbnail: "/images/gallery/new_sherrif_in_the_town_opt.jpg",
    description: "new sherrif in the town",
  },
  {
    original: "/images/gallery/natural_born_photographer_opt.jpg",
    thumbnail: "/images/gallery/natural_born_photographer_opt.jpg",
    description: "natural born photographer",
  },
  {
    original: "/images/gallery/hungarian_jakuzzi_opt.jpg",
    thumbnail: "/images/gallery/hungarian_jakuzzi_opt.jpg",
    description: "hungarian jacuzzi",
  },
  {
    original: "/images/gallery/ovoda1_opt.jpg",
    thumbnail: "/images/gallery/ovoda1_opt.jpg",
    description: "in kindergarten",
  },
  {
    original: "/images/gallery/karate_kid_opt.jpg",
    thumbnail: "/images/gallery/karate_kid_opt.jpg",
    description: "karate kid",
  },
  {
    original: "/images/gallery/graduation_opt.jpg",
    thumbnail: "/images/gallery/graduation_opt.jpg",
    description: "elementary school graduation",
  },
  {
    original: "/images/gallery/high_school_class_photo_opt.jpg",
    thumbnail: "/images/gallery/high_school_class_photo_opt.jpg",
    description: "hightschool school",
  },
  {   
    original: "/images/gallery/badboyz_opt.jpg",
    thumbnail: "/images/gallery/badboyz_opt.jpg",
    description: "bad boyz",
  },
];

export default function ImgGallery() {
  return (
    <div className={classes["gallery_container"]}>
      <ImageGallery
        showBullets={true}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={true}
        showPlayButton={false}
        items={images}
        showNav={false}
      />
    </div>
  );
}
