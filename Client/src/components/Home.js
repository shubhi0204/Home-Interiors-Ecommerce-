import React from 'react'
import About from './About';
import Contact from './Contact';
import Feature from './Feature';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import Reviews_Home from './Reviews_Home';
// import Recommend from './Recommend';
// import Trending from './Trending';
import { connect } from "react-redux";
// import { Navigate, Route } from "react-router";


const Home = (props) => {
  return (
    <div>
    {/* <Route element={!props.user && <Navigate to="/" />} /> */}
    <ImageSlider />
    <Feature />
    {/* <Recommend /> */}
    {/* <Trending /> */}
    {/* <Reviews_Home /> */}
    <About />
    <Contact />
    {/* <Footer /> */}
    </div>
  )
}


const mapStateToProps=(state)=>{
  return {
      user:state.userg.user,
  };
};

export default connect(mapStateToProps)(Home);
