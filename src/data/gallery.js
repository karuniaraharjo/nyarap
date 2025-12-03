import kopi from "../assets/images/kopi.webp";
import nasiMegono from "../assets/images/megono.webp";
import ketan from "../assets/images/ketan.webp";
import bubur from "../assets/images/bubur.webp";
import suasana from "../assets/images/suasana.webp";
import masArun from "../assets/images/mas-arun.webp";
import pisang from "../assets/images/pisang.webp";

const galleryItems = [
  {
    id: 1,
    image: nasiMegono,
    caption: "Nasi Megono khas Batang",
    size: "large",
  },
  {
    id: 2,
    image: kopi,
    caption: "Kopi susu gula aren best seller!",
    size: "small",
  },
  {
    id: 3,
    image:ketan,
    caption: "Ketan Sutra Wangi Spesial",
    size: "tall", // Foto tinggi (portrait)
  },
  {
    id: 4,
    image:pisang,
    caption: "Pisang Goreng Premium Istimewa",
    size: "tall",
  },
  {
    id: 6,
    image:bubur,
    caption: "Bubur ayam lezat untuk mengawali hari",
    size: "small",
  },
  {
    id: 7,
    image:masArun,
    caption: "Senyum ramah Mas Arun",
    size: "small",
  },
  {
    id: 8,
    image: suasana,
    caption: "Suasana Warung Nyarap yang tenang",
    size: "small"
  },
];

export default galleryItems;
