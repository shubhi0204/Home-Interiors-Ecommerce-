import React, { Fragment,useEffect } from "react";
import "../css/feature.css";
import MetaData from "./MetaData";
// import Product from "./Product";
import { clearErrors, getProduct } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./Loader";
import { useAlert } from "react-alert";
import ProductCard from "./Product/ProductCard";

const Feature = () => {

  const alert = useAlert();

  const mystyle1 = {
    textTransform: "uppercase",
    paddingTop: "16px",
    fontWeight: "400",
  };

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if(error){
     return alert.error(error);
      // dispatch(clearErrors());    
    }

    dispatch(getProduct());

    return () => {}

  }, [dispatch,error,alert]);

  return (
    <Fragment>
      {loading ? (
          <Loader />
      ):(
        <Fragment>
        <div>
      <MetaData title="Decor Life" />
      <center>
        <h3 className="box-title" style={mystyle1}>
          Featured Products
        </h3>
      </center>
      <div className="container1" id="container1">
      {products && products.reverse().slice(0, 10).map((product) => <ProductCard key={product._id} product={product} />)}
        {/* {products && products.reverse().map((product) => <ProductCard key={product._id} product={product} />)} */}
      </div>
    </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Feature;
