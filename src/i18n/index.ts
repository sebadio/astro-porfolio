import es from "./es.json";
import en from "./en.json";

const LANGUAGES = {
  ES: "es",
  EN: "en",
};

export const getI18n = ({ currentLocale }: { currentLocale: string }) => {
  if (currentLocale === LANGUAGES.ES) return es;
  if (currentLocale === LANGUAGES.EN) return en;
  return en;
};
