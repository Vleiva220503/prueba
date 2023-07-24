import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/react";
import WeatherPanel from "./components/WeatherPanel";

import "./assets/css/App.css";

 const App = () => {
  const { t, i18n } = useTranslation("global");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return (
    <div className="App">
       <Button onClick={() => changeLanguage("es")}>Es</Button>
      <Button onClick={() => changeLanguage("en")}>En</Button>
      <h1>{t("Weather")}</h1>
      <WeatherPanel /> 
    </div>
  );
};

export default App;


