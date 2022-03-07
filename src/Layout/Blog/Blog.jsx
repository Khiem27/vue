import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BlogTitle from "../../Components/PageTitle/Blog/BlogTitle";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Categories from "../../Components/Categories/Categories";
import InstagramFeeds from "../../Components/InsFeeds/InstagramFeeds";
import Blogbanner from "../../Components/Banner/Blog/Blogbanner";
import Footer from "../../Components/Footer/Footer";
import BlogItems from "../../Components/BlogItems/BlogItems";
import Header from "../../Components/Header/Header";
Blog.propTypes = {};

function Blog(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <BlogTitle />
      <div class="blog-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogItems />
            </div>
            <div className="col-lg-4">
              <AboutMe />
              <Categories />
              <InstagramFeeds />
              <Blogbanner />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
