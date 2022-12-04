import { AppMain } from "./router/AppMain";
import background from "./assets/back_video.mp4";
import "./assets/app.css";
import "./assets/normalize.css";
import "./assets/animations.css";
import "./assets/details.css";
import { PortalWindowContextProvider } from "./context/context";

function App() {
  return (
    <PortalWindowContextProvider>
      <AppMain />
    </PortalWindowContextProvider>
  );
}

export default App;
