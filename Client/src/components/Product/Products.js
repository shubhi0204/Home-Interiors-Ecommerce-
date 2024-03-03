import React, { Fragment, useEffect, useState } from "react";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../Loader";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../MetaData";

const categories = [
    "Light",
    "Fan",
    "Mirror TV",
    "Ventless Fireplace",
    "Fireplaces Baaroq",
    "Handles",
    "Nico1",
    "Nico3",
    "Nico5",
    // "Nico6",
    "Nico7",
    // "Nico8",
    "Nico10",
    "Nico12",
    "Nico13",
    "Nico14",
    "Nico15",
    "Nico17",
    "Nico18",
    "Nico20",
    "Nico21",
    "Nico22",
    "Nico23",
    "Nico24",
    "Nico26",
    "Nico27",
    "Nico28",
    "Nico29",
    "Nico33",
    "Nico34",
    "Nico37",
];

const Products = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const { products, loading, error, productsCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    
    setPrice(newPrice);
  };

  let count = productsCount;

  useEffect(() => {

    if(error){
        return alert.error(error);
        // dispatch(clearErrors());
    }
    dispatch(getProduct(keyword,currentPage,price,category,ratings));
  }, [dispatch, keyword, currentPage, price,category,ratings,alert,error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

        <MetaData title="Products -- Decor Life" />
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>


          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

            {/* <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul> */}

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
