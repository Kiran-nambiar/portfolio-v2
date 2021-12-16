import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyles";
import About from "./components/about";
import Homepage from "./components/home";
import Header from "./components/Navigation/Header";

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
