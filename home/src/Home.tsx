import "./Home.css";
import Header from "header/Header";
import Footer from "footer/Footer";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="home-main">This is a Home page</main>
      <Footer />
    </div>
  );
}

export default Home;
