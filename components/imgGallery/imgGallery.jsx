import classes from "./imgGallery.module.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { isIOS } from "../../utils/platform";

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
    original: "/images/gallery/videoton_tv_computer.jpg",
    thumbnail: "/images/gallery/videoton_tv_computer.jpg",
    description: "Videoton TV Computer",
  },
  {
    original: "/images/gallery/graduation_opt.jpg",
    thumbnail: "/images/gallery/graduation_opt.jpg",
    description: "elementary school graduation",
  },
  {
    original: "/images/gallery/c-plus4.jpg",
    thumbnail: "/images/gallery/c-plus4.jpg",
    description: "the greatest Commodore Plus 4",
  },
  {
    original: "/images/gallery/commodore64.jpg",
    thumbnail: "/images/gallery/commodore64.jpg",
    description: "the next in the row Commodore 64, this time with floppy driver",
  },
  {
    original: "/images/gallery/IBM_PC_XT_5160.jpg",
    thumbnail: "/images/gallery/IBM_PC_XT_5160.jpg",
    description: "First encounter: IBM PC XT",
  },
  {
    original: "/images/gallery/high_school_class_photo_opt.jpg",
    thumbnail: "/images/gallery/high_school_class_photo_opt.jpg",
    description: "hightschool school",
  },
  {
    original: "/images/gallery/286.jpg",
    thumbnail: "/images/gallery/286.jpg",
    description: "PC 286",
  },
  {
    original: "/images/gallery/525floppy.jpg",
    thumbnail: "/images/gallery/525floppy.jpg",
    description: "and some OS for that",
  },
  {   
    original: "/images/gallery/badboyz_opt.jpg",
    thumbnail: "/images/gallery/badboyz_opt.jpg",
    description: "bad boyz",
  },
  {   
    original: "/images/gallery/486.jpg",
    thumbnail: "/images/gallery/486.jpg",
    description: "PC, this is a step forward: 486 with turbo",
  },
  {   
    original: "/images/gallery/pentium.jpg",
    thumbnail: "/images/gallery/pentium.jpg",
    description: "...and here comes the famous Pentium, with the less famous win 98",
  },
  {   
    original: "/images/gallery/hikers.jpg",
    thumbnail: "/images/gallery/hikers.jpg",
    description: "hikers",
  },
  {   
    original: "/images/gallery/shooting_some_artistic_photo.jpg",
    thumbnail: "/images/gallery/shooting_some_artistic_photo.jpg",
    description: "shooting some 'artistic'",
  },
  {   
    original: "/images/gallery/bikers.jpg",
    thumbnail: "/images/gallery/bikers.jpg",
    description: "bikers",
  },
  {   
    original: "/images/gallery/shooting_a_short_film_with_dslr.jpg",
    thumbnail: "/images/gallery/shooting_a_short_film_with_dslr.jpg",
    description: "shooting a short film",
  },
  {   
    original: "/images/gallery/beautiful_barcelona.jpg",
    thumbnail: "/images/gallery/beautiful_barcelona.jpg",
    description: "Beautiful Barcelona",
  },
  
  {   
    original: "/images/gallery/stag_party_with_my_friend.jpg",
    thumbnail: "/images/gallery/stag_party_with_my_friend.jpg",
    description: "My Stag Party",
  },
  {   
    original: "/images/gallery/wedding.jpg",
    thumbnail: "/images/gallery/wedding.jpg",
    description: "just about to get married",
  },
  {   
    original: "/images/gallery/es_opt.png",
    thumbnail: "/images/gallery/es_opt.png",
    description: "wedding",
  },
  
  {   
    original: "/images/gallery/the_tuareg.jpg",
    thumbnail: "/images/gallery/the_tuareg.jpg",
    description: "being a tuareg",
  },
  {   
    original: "/images/gallery/braga.jpg",
    thumbnail: "/images/gallery/braga.jpg",
    description: "Braga",
  },
  {   
    original: "/images/gallery/with_my_godson.jpg",
    thumbnail: "/images/gallery/with_my_godson.jpg",
    description: "with my first Grandson",
  },
  {   
    original: "/images/gallery/crete_me.png",
    thumbnail: "/images/gallery/crete_me.png",
    description: "crete",
  },
  {   
    original: "/images/gallery/belgium.jpg",
    thumbnail: "/images/gallery/belgium.jpg",
    description: "Belgium",
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
        useBrowserFullscreen={true}
        showFullscreenButton = {isIOS() ? false: true}
      />
    </div>
  );
}
