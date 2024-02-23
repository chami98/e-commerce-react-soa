import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [DATA, setDATA] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/women's clothing"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLoading(false);
        setDATA(data);
        console.log(DATA);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/assets/images/home/img1.jpg"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/home/img2.jpg"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/home/img3.jpg"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/home/img4.jpg"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {!loading && <Product DATA={DATA} />}
    </div>
  );
};

export default Home;
