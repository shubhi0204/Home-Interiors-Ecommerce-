import React, { useState, Fragment } from "react";
import {useNavigate} from "react-router-dom"
// import "./Search.css";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(keyword);
    // if (keyword.trim()) {
    //   history.push(`/products/${keyword}`);
    // } else {
    //   history.push("/products/");
    // }
  };

  return (
    <Fragment>
      <form className="navbar-form form-inline" onSubmit={searchSubmitHandler}>
        <div className="input-group search-box">
          <input
            type="text"
            // id="search"
            className="form-control"
            placeholder="Search a product..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="material-icons">&#xE8B6;</i>
            </span>
          </div>
          <input type="submit" style={{border:"none"}} value="Search" onClick={()=>keyword.trim()?navigate(`/products/${keyword}`):navigate("/products/")}/>
        </div>
      </form>
    </Fragment>
  );
};

export default Search;
