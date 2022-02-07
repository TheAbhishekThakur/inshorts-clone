import { Container } from "@material-ui/core";
import "./News.css";
import moment from "moment";

const News = ({ news, totalNews, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadTxt">
            For the best experience use inshorts app on your smartphone
          </span>
          <img src="assets/appstore.png" height="80%" />
          <img src="assets/playstore.png" height="80%" />
        </div>

        <div>
          {news.length
            ? news.map((item, index) => (
                <div key={index} className="newsCard">
                  <img
                    className="newsImage"
                    src={
                      item.urlToImage
                        ? item.urlToImage
                        : "assets/placeholder-image"
                    }
                    alt={item.title}
                  />
                  <div className="newsText">
                    <div>
                      <span className="title">{item.title}</span>
                      <br />
                      <span className="author">
                        <a
                          href={item.url}
                          target="_blank"
                          style={{ color: "black" }}
                        >
                          <b>Short</b>
                        </a>{" "}
                        <span className="muted">
                          by {item.author ? item.author : "unknown"} /{" "}
                          {moment(item.publishedAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </span>
                      </span>
                    </div>
                    <div className="lowerNewsText">
                      <div className="description">{item.description}</div>
                      <span className="readmore">
                        Read More at{" "}
                        <a
                          style={{ color: "black" }}
                          href={item.url}
                          target="_blank"
                        >
                          <b>{item.source.name}</b>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              ))
            : null}
          {loadMore <= totalNews && (
            <>
              <hr />
              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <button
                  className="loadmore"
                  onClick={() => setLoadMore(loadMore + 20)}
                >
                  Load More
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default News;