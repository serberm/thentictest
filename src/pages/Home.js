import Hero from "../components/Hero";
import "../styles/Home.css";
import CardList from "../components/CardList";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <Header />

      <div id="home">
        <Hero list={[]} />
        <p id="card-list-header-text"> Hot Drops 111</p>
        <div id="list-container">
          <CardList list={[]} />
        </div>
      </div>
    </>
  );
};

export default Home;
