import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyles";
import Homepage from "./components/home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* <Route path="/about" component={About} />
        <Route path="/work" component={Technologies} />
        <Route path="/contact" component={Contact} />
        <Route path="/widgets/weather-app" component={TemperatureTracker} />
        <Route path="/widgets/mars-rover-images" component={Nasa} />
        <Route path="/widgets/news" component={NewsApi} />
        <Route path="/widgets/jokes" component={Jokes} />
        <Route path="*" component={NotFound} />
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/my-account' element={<Account />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
