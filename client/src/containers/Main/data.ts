import { ImageProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import meh from "../../assets/meh.webp";
import bullsEye from "../../assets/bulls-eye.webp";
import thumbsUp from "../../assets/thumbs-up.webp";

import { BsGlobe, BsNintendoSwitch, BsXbox } from "react-icons/bs";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";
import { TbPlaystationTriangle, TbXboxB } from "react-icons/tb";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiNintendo,
  SiNintendo3Ds,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
  SiPlaystationvita,
} from "react-icons/si";

export const iconsMap: IconType[] = [
  FaWindows,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
  BsXbox,
  TbXboxB,
  SiNintendo,
  SiNintendo3Ds,
  SiPlaystationvita,
  TbPlaystationTriangle,
  BsNintendoSwitch,
  FaApple,
  FaLinux,
  MdPhoneIphone,
  BsGlobe,
];

export const platforms = [
  { id: 4, name: "PC", slug: "pc" },
  { id: 187, name: "PlayStation 5", slug: "playstation5" },
  { id: 18, name: "PlayStation 4", slug: "playstation4" },
  { id: 1, name: "Xbox One", slug: "xbox-one" },
  { id: 186, name: "Xbox Series S/X", slug: "xbox-series-x" },
  { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" },
  { id: 3, name: "iOS", slug: "ios" },
  { id: 21, name: "Android", slug: "android" },
  { id: 8, name: "Nintendo 3DS", slug: "nintendo-3ds" },
  { id: 9, name: "Nintendo DS", slug: "nintendo-ds" },
  { id: 13, name: "Nintendo DSi", slug: "nintendo-dsi" },
  { id: 5, name: "macOS", slug: "macos" },
  { id: 6, name: "Linux", slug: "linux" },
  { id: 14, name: "Xbox 360", slug: "xbox360" },
  { id: 80, name: "Xbox", slug: "xbox-old" },
  { id: 16, name: "PlayStation 3", slug: "playstation3" },
  { id: 15, name: "PlayStation 2", slug: "playstation2" },
  { id: 27, name: "PlayStation", slug: "playstation1" },
  { id: 19, name: "PS Vita", slug: "ps-vita" },
  { id: 17, name: "PSP", slug: "psp" },
  { id: 10, name: "Wii U", slug: "wii-u" },
  { id: 11, name: "Wii", slug: "wii" },
  { id: 105, name: "GameCube", slug: "gamecube" },
  { id: 83, name: "Nintendo 64", slug: "nintendo-64" },
  { id: 24, name: "Game Boy Advance", slug: "game-boy-advance" },
  { id: 43, name: "Game Boy Color", slug: "game-boy-color" },
  { id: 26, name: "Game Boy", slug: "game-boy" },
  { id: 79, name: "SNES", slug: "snes" },
  { id: 49, name: "NES", slug: "nes" },
  { id: 55, name: "Classic Macintosh", slug: "macintosh" },
  { id: 41, name: "Apple II", slug: "apple-ii" },
  { id: 166, name: "Commodore / Amiga", slug: "commodore-amiga" },
  { id: 28, name: "Atari 7800", slug: "atari-7800" },
  { id: 31, name: "Atari 5200", slug: "atari-5200" },
  { id: 23, name: "Atari 2600", slug: "atari-2600" },
  { id: 22, name: "Atari Flashback", slug: "atari-flashback" },
  { id: 25, name: "Atari 8-bit", slug: "atari-8-bit" },
  { id: 34, name: "Atari ST", slug: "atari-st" },
  { id: 46, name: "Atari Lynx", slug: "atari-lynx" },
  { id: 50, name: "Atari XEGS", slug: "atari-xegs" },
  { id: 167, name: "Genesis", slug: "genesis" },
  { id: 107, name: "SEGA Saturn", slug: "sega-saturn" },
  { id: 119, name: "SEGA CD", slug: "sega-cd" },
  { id: 117, name: "SEGA 32X", slug: "sega-32x" },
  { id: 74, name: "SEGA Master System", slug: "sega-master-system" },
  { id: 106, name: "Dreamcast", slug: "dreamcast" },
  { id: 111, name: "3DO", slug: "3do" },
  { id: 112, name: "Jaguar", slug: "jaguar" },
  { id: 77, name: "Game Gear", slug: "game-gear" },
  { id: 12, name: "Neo Geo", slug: "neogeo" },
];

export const orderings = [
  { name: "Date added", slug: "added" },
  { name: "Date updated", slug: "updated" },
  { name: "Name", slug: "name" },
  { name: "Release date", slug: "released" },
  { name: "Average rating", slug: "rating" },
];

export const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};
