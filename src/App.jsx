import { AppMain } from "./router/AppMain";
import background from "./assets/back_video.mp4";
import "./assets/app.css";
import "./assets/normalize.css";
import "./assets/animations.css";
import "./assets/details.css";
import { ContextProvider } from "./context/context";

function App() {
  return (
    <ContextProvider>
      <AppMain />
    </ContextProvider>
  );
}

export default App;
