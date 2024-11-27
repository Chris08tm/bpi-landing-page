import BPIFooter from "./components/BPIFooter";
import BPIHome from "./components/BPIHome";
import BPIServices from "./components/BPIServices";
import BPIAbout from "./components/BPIAbout";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  return (
    <div>
      <NavigationBar language={language} toggleLanguage={toggleLanguage} />
      <BPIHome language={language} />
      <BPIServices language={language} />
      <BPIAbout language={language} />
      <BPIFooter language={language} />
    </div>
  );
}
