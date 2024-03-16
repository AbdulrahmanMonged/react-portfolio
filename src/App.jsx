import Playground from "./Playground";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "./ResponsiveAppBar";

import "./styles/App.css";

function App() {
  return (
    <div className="mainContent">
      <CssBaseline />
      <ResponsiveAppBar />
      <div className="content">
        <Playground />
      </div>
    </div>
  );
}

export default App;
