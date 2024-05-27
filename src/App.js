import "./App.css";
import AboutusPage from "./components/aboutuspage/aboutus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcomepage from "./components/welcomepage/welcomepage";
import ContactPage from "./components/contactpage/contactpage";
import MenStorePage from "./components/store/menstorepage";
import WomenStore from "./components/store/womenstore";
import JeweleryStore from "./components/store/jewelerystore";
import ElectronicStore from "./components/store/electronicstore";
import LoginPage from "./components/loginpage/loginpage";
import SignupPage from "./components/signuppage/signuppage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcomepage></Welcomepage>}></Route>
          <Route path="/aboutus" element={<AboutusPage></AboutusPage>}></Route>
          <Route
            path="/contactus"
            element={<ContactPage></ContactPage>}
          ></Route>
          <Route path="/signuppage" element={<SignupPage/>}></Route>
          <Route
            path="/menstore"
            element={<MenStorePage></MenStorePage>}
          ></Route>
          <Route path="/womenstore" element={<WomenStore></WomenStore>}></Route>
          <Route
            path="/jewelerystore"
            element={<JeweleryStore></JeweleryStore>}
          ></Route>
          <Route
            path="/electronicstore"
            element={<ElectronicStore></ElectronicStore>}
          ></Route>
          <Route path="/loginpage" element={<LoginPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
