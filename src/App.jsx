import "./index.css";
import NavBar from "./components/nav";
import Pages from "./components/pages";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div id="container">
        <NavBar />
        <div id="main-section">
          <Pages />
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
