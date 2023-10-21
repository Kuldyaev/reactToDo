import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Login from "./components/login";
import NotFound from "./components/notfound";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Main} />
          <Route exact path="/login" Component={Login} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
