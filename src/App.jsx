import { AppMain } from "./router/AppMain";
import "./assets/app.css";
import "./assets/normalize.css";
import "./assets/animations.css";
import "./assets/details.css";
import "./assets/info.css";
import "./assets/nav.css";
import "./assets/main.css";
import "./assets/footer.css";

import { PortalWindowContextProvider } from "./context/context";

function App() {
  return (
    <PortalWindowContextProvider>
      <AppMain />
    </PortalWindowContextProvider>
  );
}

export default App;
