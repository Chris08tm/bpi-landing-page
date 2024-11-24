import BPIFooter from "./components/BPIFooter";
import BPIHome from "./components/BPIHome";
import BPIServices from "./components/BPIServices";
import BPIAbout from "./components/BPIAbout";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <div>
      <NavigationBar />
      <BPIHome />
      <BPIServices />
      <BPIAbout />
      <BPIFooter />
    </div>
  );
}
