import React, { useEffect } from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Blogbanner from "../../Components/Banner/Blog/Blogbanner";
import BlogItems from "../../Components/BlogItems/BlogItems";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import InstagramFeeds from "../../Components/InsFeeds/InstagramFeeds";
import BlogTitle from "../../Components/PageTitle/Blog/BlogTitle";
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
