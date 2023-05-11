import "./App.css";
import Header from "header/Header";
import Footer from "footer/Footer";

function Home() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">This is a Home page</main>
      <Footer />
    </div>
  );
}

export default Home;
