import "../css/header.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOutAPI } from "../actions/userAction";
import React, { Fragment, useEffect, useState } from "react";
import Search from "./Search";
import LoginAndSignUp from "./User/LoginAndSignUp";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, login, register } from "../actions/userAction";
import { useAlert } from "react-alert";
import { clearErrors } from "../actions/userAction";
import { getProduct } from "../actions/productAction";
// const { user, isAuthenticated } = useSelector((state) => state.user);
// import userImg from "../images/user.svg";
// import downIcon from "../images/down-icon.svg";

// import home from "../images/home.png";
// import info from "../images/info.png";
// import phone from "../images/phone.png";

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

const Header = () => {
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");

  useEffect(() => {
    if (error) {
      // return alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(category));
    // return () => {}
  }, [dispatch, alert, error, isAuthenticated, category]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a href="/" className="navbar-brand">
                DecorLife
              </a>
              {/* <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                class="icn menuicn"
                id="menuicn"
                alt="menu-icon"
              ></img> */}
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* Collection of nav links, forms, and other content for toggling  */}
              <div
                id="navbarCollapse"
                className="collapse navbar-collapse justify-content-start"
              >
                <div className="navbar-nav">
                  <a href="/" className="nav-item nav-link">
                    Home
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="/"
                      data-toggle="dropdown"
                      className="nav-item nav-link dropdown-toggle"
                    > 
                      Categories
                    </a>
                    <div className="dropdown-menu category-dropdown">
                      <div className="row">
                        {categories.map((category, index) => (
                          <div className="col-md-3" key={index}>
                            <a 
                              className="dropdown-item"
                              onClick={() => setCategory(category)}
                            >
                              {category}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* <div className="dropdown-menu">
                      <a href="/products" className="dropdown-item">
                        All Products
                      </a>
                      <a href="/products" className="dropdown-item">
                        Furniture
                      </a>
                      <a href="/products" className="dropdown-item">
                        Home Decor
                      </a>
                      <a href="/products" className="dropdown-item">
                        Kitchen
                      </a>
                      <a href="/products" className="dropdown-item">
                        Lighting
                      </a>
                  </div> */}
                  </div>
                  <a href="/products" className="nav-item nav-link">
                    Products
                  </a>
                  {/* <a href="/" className="nav-item nav-link">
                    Blog
                  </a> */}
                  <a href="#contact" className="nav-item nav-link">
                    Contact
                  </a>
                  <a href="#about" className="nav-item nav-link">
                    About
                  </a>
                </div>
                <Search />

                <User>
                    {/* <a>
                        {props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt="" />):(<img src={userImg} alt="" />)}
                        <span>Me
                        <img src={downIcon} alt="" />
                        </span>
                    </a> */}

                    <SignOut onClick={()=>dispatch(signOutAPI())}>
                        {/* <a>
                            Sign Out
                        </a> */}
                    </SignOut>
                </User>

                {!isAuthenticated && <LoginAndSignUp />}
              </div>
            </nav>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const SignOut=styled.div`
    position: absolute;
    top: 45px;
    background: white;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none;
`;

const NavList=styled.li`
    display: flex;
    align-items: center;
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        span{
            color: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
        }
        @media (max-width:768px) {
            min-width: 70px;
        }
    }

    &:hover, &:active{
        a{
            color: rgba(0,0,0,0.9);
        }
    }
`;

const User=styled(NavList)`
    a > svg{
        width: 24px;
        border-radius: 50%;
    }

    a > img {
        width: 24px;
        height: 24px;
        border-bottom: 50%;
    }

    span{
        display: flex;
        align-items: center;
    }

    &:hover{
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`;

const mapStateToProps=(state)=>{
  return {
      user:state.userg.user,
  };
};

const mapDispatchToProps=(dispatch)=>({
  signOut:()=> dispatch(signOutAPI()),
});

export default connect(mapStateToProps)(Header);
// export default Header;