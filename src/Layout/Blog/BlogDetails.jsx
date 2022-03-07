import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BlogsApi from "../../Api/Blogs/BlogsApi";
import Categories from "../../Components/Categories/Categories";
import InstagramFeeds from "../../Components/InsFeeds/InstagramFeeds";
import Blogbanner from "../../Components/Banner/Blog/Blogbanner";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import BlogTitle from "../../Components/PageTitle/Blog/BlogTitle";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Quotes from "../../Components/Quotes/Quotes";
import Footer from "../../Components/Footer/Footer";
import PopularFeeds from "../../Components/PopularFeeds/PopularFeeds";
import Header from "../../Components/Header/Header";

BlogDetails.propTypes = {};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function BlogDetails(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [prevBlogItems, setPrevBlogItems] = useState(null);
  const [blogItems, setBlogItems] = useState([]);
  const [nextBlogItems, setNextBlogItems] = useState(null);
  let { blogID } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getBlogsApi = async () => {
      const getOneData = await BlogsApi.getOne(blogID - 1);
      const getOneBlogItems = getOneData.data;
      setBlogItems(getOneBlogItems);
      // prev
      if (blogID !== 1) {
        const PrevgetOneData = await BlogsApi.getOne(blogID - 2);
        const PrevgetOneBlogItems = PrevgetOneData.data;
        setPrevBlogItems(PrevgetOneBlogItems);
      }
      // next
      if (blogID !== 10) {
        const NextgetOneData = await BlogsApi.getOne(blogID);
        const NextgetOneBlogItems = NextgetOneData.data;
        setNextBlogItems(NextgetOneBlogItems);
      }
    };
    getBlogsApi();
  }, []);
  return (
    <>
      <Header />
      <BlogTitle />

      <div class="blog-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {blogItems ? (
                <article class="postbox post format-image mb-40">
                  {blogItems.video1 ? (
                    <div class="postbox__video mb-35">
                      <img src={blogItems.video1} alt="blog image" />
                      <a
                        onClick={handleOpen}
                        class="popup-video video-btn"
                        href="javascript:void(0)"
                      >
                        <i class="fas fa-play"></i>
                      </a>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/BJeg2Kta2wY"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </Box>
                      </Modal>
                    </div>
                  ) : (
                    <div class="postbox__thumb mb-35">
                      <img src={blogItems.image1} alt="blog image" />
                    </div>
                  )}
                  <div class="postbox__text bg-none">
                    <div class="post-meta mb-15">
                      <span>
                        <i class="far fa-calendar-check"></i> {blogItems.date}{" "}
                      </span>
                      <span>
                        <a href="#">
                          <i class="far fa-user"></i> MD. Salim Rana
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="far fa-comments"></i> 2 Comments
                        </a>
                      </span>
                    </div>
                    <h3 class="blog-title">{blogItems.title}</h3>
                    <div class="post-text mb-20">
                      <p>{blogItems.desc1}</p>
                      <p>{blogItems.desc2}</p>
                      <Quotes />
                      <p>{blogItems.desc3}</p>
                      <div class="blog-inner-img mb-30 mt-30">
                        <img src={blogItems.image2} alt="blog image" />
                      </div>
                      <div class="inner-content">
                        <h4>{blogItems.subtitle1}</h4>
                        <p>{blogItems.desc4}</p>
                      </div>
                      <div class="inner-content">
                        <h4>{blogItems.subtitle2}</h4>
                        <p>{blogItems.desc5}</p>
                      </div>
                    </div>
                    <div class="row mt-50">
                      <div class="col-xl-8 col-lg-8 col-md-8 mb-15">
                        <div class="blog-post-tag">
                          <span>Releted Tags</span>
                          <a href="#">organic</a>
                          <a href="#">Foods</a>
                          <a href="#">tasty</a>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 mb-15">
                        <div class="blog-share-icon text-left text-md-right">
                          <span>Share: </span>
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-google-plus-g"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-vimeo-v"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="navigation-border pt-50 mt-40"></div>
                      </div>
                      <div class="col-xl-5 col-lg-5 col-md-5">
                        {prevBlogItems ? (
                          <div class="bakix-navigation b-next-post text-left mb-30">
                            <span>
                              <Link to={`/blog/${blogID - 1}`}>Prev Post</Link>
                            </span>
                            <h4>
                              <a href="/blog/1">{prevBlogItems.title}</a>
                            </h4>
                          </div>
                        ) : null}
                      </div>
                      <div class="col-xl-2 col-lg-2 col-md-2 ">
                        <div class="bakix-filter text-left text-md-center mb-30">
                          <a href="#">
                            <img
                              style={{ width: "40px" }}
                              src="https://vue-plum-chi.vercel.app/img/icon/filter.png"
                              alt="filter"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-xl-5 col-lg-5 col-md-5">
                        {nextBlogItems ? (
                          <div class="bakix-navigation b-next-post text-left text-md-right  mb-30">
                            <span>
                              <Link to={`/blog/${blogID + 1}`}>Next Post</Link>
                            </span>
                            <h4>
                              <a href="/blog/2">{nextBlogItems.title}</a>
                            </h4>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div class="author mt-80 mb-40">
                    <div class="author-img text-center">
                      <img
                        style={{ width: "120px" }}
                        src="https://vue-plum-chi.vercel.app/img/blog/details/author.png"
                        alt="Author image"
                      />
                    </div>
                    <div class="author-text text-center">
                      <h3>MD. Salim Rana</h3>
                      <div class="author-icon">
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-behance-square"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-vimeo-v"></i>
                        </a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequa aute irure dolor.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="post-comments">
                    <div class="blog-coment-title mb-30">
                      <h2>02 Comments</h2>
                    </div>
                    <div class="latest-comments">
                      <ul>
                        <li>
                          <div class="comments-box">
                            <div class="comments-avatar">
                              <img
                                src="https://vue-plum-chi.vercel.app/img/blog/details/comments1.png"
                                alt="profilePic"
                              />
                            </div>
                            <div class="comments-text">
                              <div class="avatar-name">
                                <h5>Karon Balina</h5>
                                <span>19TH MAY 2018</span>
                                <a class="reply" href="#">
                                  <i class="fas fa-reply"></i>Reply
                                </a>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div>
                          <ul>
                            <li class="children">
                              <div
                                class="comments-box"
                                style={{
                                  padding: "30px 0px",
                                  borderTop: "1px solid rgb(234, 237, 255)",
                                }}
                              >
                                <div class="comments-avatar">
                                  <img
                                    src="https://vue-plum-chi.vercel.app/img/blog/details/comments1.png"
                                    alt="Profile Pic"
                                  />
                                </div>
                                <div class="comments-text">
                                  <div class="avatar-name">
                                    <h5>Karon Balina</h5>
                                    <span>19TH MAY 2018</span>
                                    <a class="reply" href="#">
                                      <i class="fas fa-reply"></i>Reply
                                    </a>
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div class="comments-box">
                            <div class="comments-avatar">
                              <img
                                src="https://vue-plum-chi.vercel.app/img/blog/details/comments2.png"
                                alt="profilePic"
                              />
                            </div>
                            <div class="comments-text">
                              <div class="avatar-name">
                                <h5>Arista Williamson</h5>
                                <span>19TH MAY 2018</span>
                                <a class="reply" href="#">
                                  <i class="fas fa-reply"></i>Reply
                                </a>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="post-comments-form">
                    <div class="post-comments-title">
                      <h2>Post Comments</h2>
                    </div>
                    <form
                      id="contacts-form"
                      class="conatct-post-form"
                      action="#"
                    >
                      <div class="row">
                        <div class="col-xl-12">
                          <div class="contact-icon contacts-message">
                            <textarea
                              name="comments"
                              id="comments"
                              cols="30"
                              rows="10"
                              placeholder="Your Comments...."
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-xl-12">
                          <div class="contact-icon contacts-name">
                            <input type="text" placeholder="Your Name.... " />
                          </div>
                        </div>
                        <div class="col-xl-12">
                          <div class="contact-icon contacts-email">
                            <input type="email" placeholder="Your Email...." />
                          </div>
                        </div>
                        <div class="col-xl-12">
                          <div class="contact-icon contacts-website">
                            <input type="text" placeholder="Your Website...." />
                          </div>
                        </div>
                        <div class="col-xl-12">
                          <button class="btn theme-btn" type="submit">
                            Post comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </article>
              ) : null}
            </div>
            <div className="col-lg-4">
              <AboutMe />
              <PopularFeeds />
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

export default BlogDetails;
