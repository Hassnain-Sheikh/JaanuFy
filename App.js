import Content from "./components/Content";
import Bottombar from "./components/Bottombar";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AppProvider } from "./stores/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="wrapper">
          <Switch>
            <Header />
          </Switch>
          <Content />
        </div>
        <Bottombar />
      </Router>
      
    </AppProvider>
  );
}

export default App;
