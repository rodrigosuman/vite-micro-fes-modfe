import "./Page2.css";
import Header from "header/Header";
import Footer from "footer/Footer";

function Home() {
  return (
    <div className="page-2-container">
      <Header />
      <main className="page-2-main">This is a Page 2 App</main>
      <Footer />
    </div>
  );
}

export default Home;
