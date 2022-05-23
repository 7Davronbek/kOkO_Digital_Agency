import { LANGUAGE } from "../tools/constans";
import { uz } from "./UZ";
import { ru } from "./RU";

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
  return getLanguage() === "uz"
    ? uz[word]
    : getLanguage() === "ru"
    ? ru[word]
    : uz[word];
};
