import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { apiBaseUrl, newsAPIKey } from "./Utils/constant";
import News from "./components/NewsContent/News";
import axios from "axios";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [totalNews, setTotalNews] = useState(0);
  const [loadMore,setLoadMore] = useState(20)

  const callNewsApi = async() => {
    try{
      let url = `${apiBaseUrl}/top-headlines?country=in&category=${category}&apiKey=${newsAPIKey}&pageSize=${loadMore}`;
      const res = await axios.get(url);
      if(res.data.status === "ok"){
        setNews(res.data.articles);
        setTotalNews(res.data.totalResults)
      }
    }catch(err){
      console.log("err", err);
    }
  };

  useEffect(() => {
    callNewsApi();
  }, [category, totalNews, loadMore]);

  return (
    <div>
      <NavBar setCategory={setCategory} />
      <News 
      news={news}
      totalNews={totalNews}
      loadMore={loadMore}
      setLoadMore={setLoadMore} />
      <Footer />
    </div>
  );
}

export default App;