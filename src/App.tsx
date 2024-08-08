import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Privacy } from "./components/Privacy/Privacy";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <GlobalStyle></GlobalStyle>
              <Header></Header>
              <Main></Main>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/scrollzz/privacy"
          element={
            <>
              <GlobalStyle></GlobalStyle>
              <Header></Header>
              <Privacy></Privacy>
              <Footer></Footer>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
