import CardList from "../components/CardList";
import "../styles/Explore.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
const Explore = () => {
  const [nfts, setNfts] = useState([]);

  const getNFTs = async () => {
    try {
      const res = await axios.get("https://thentic.tech/api/nfts", {
        params: {
          key: "3ape5peE6EAbPXq60CmgzgcBnVkn5lIY",
          chain_id: 3,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data, "====");
      setNfts(res.data.nfts);
    } catch (e) {}
  };
  useEffect(() => {
    getNFTs();
  }, []);
  return (
    <div id="explore">
      <Header />
      <div id="list-container">
        <CardList list={nfts} />
      </div>
    </div>
  );
};

export default Explore;
