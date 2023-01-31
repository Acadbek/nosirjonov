import ideas from "../public/icons/IntelliSense/lightbulb.svg";
import design from "../public/icons/IntelliSense/symbol-color.svg";
import projects from "../public/icons/IntelliSense/symbol-event.svg";
import key from "../public/icons/IntelliSense/symbol-string.svg";
import book from "../public/icons/Misc/book.svg";
import music from "../public/icons/Misc/settings.svg";

export const collection = [
  {
    id: 3,
    title: "Design",
    icon: design,
    shortcut: false,
    link: "/design",
    comingSoon: true
  },
  {
    id: 4,
    title: "Ideas",
    icon: ideas,
    shortcut: true,
    link: "/ideas",
    comingSoon: true
  },
  {
    id: 5,
    title: "Keyboards",
    icon: key,
    shortcut: true,
    link: "/keyboards",
    comingSoon: true
  },
  {
    id: 7,
    title: "Music",
    icon: music,
    shortcut: true,
    link: "/music",
    comingSoon: true
  },
  {
    id: 8,
    title: "Projects",
    icon: projects,
    shortcut: true,
    link: "/projects",
  },
  {
    id: 9,
    title: "Reading",
    icon: book,
    shortcut: true,
    link: "/reading",
    comingSoon: true
  },
];
