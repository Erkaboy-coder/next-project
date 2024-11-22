import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
};

const wonders: WonderImage[] = [
    { id: "1", name: "Great Wall of China", src: photo1, photographer: "John Doe", location: "China" },
    { id: "2", name: "Taj Mahal", src: photo2, photographer: "Jane Doe", location: "India" },
    { id: "3", name: "Colosseum", src: photo3, photographer: "Max Smith", location: "Italy" },
    { id: "4", name: "Machu Picchu", src: photo4, photographer: "Anna Brown", location: "Peru" },
    { id: "5", name: "Petra", src: photo5, photographer: "Sara White", location: "Jordan" },
    { id: "6", name: "Christ the Redeemer", src: photo6, photographer: "Carlos Green", location: "Brazil" },
];

export default wonders;
