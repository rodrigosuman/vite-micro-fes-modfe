import "./Page1.css";
import Header from "header/Header";
import Footer from "footer/Footer";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="home-main">This is a Page 1 App</main>
      <Footer />
    </div>
  );
}

export default Home;
