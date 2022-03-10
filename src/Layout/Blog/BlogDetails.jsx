import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import BlogsApi from "../../Api/Blogs/BlogsApi";
import Blogbanner from "../../Components/Banner/Blog/Blogbanner";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import InstagramFeeds from "../../Components/InsFeeds/InstagramFeeds";
import BlogTitle from "../../Components/PageTitle/Blog/BlogTitle";
import PopularFeeds from "../../Components/PopularFeeds/PopularFeeds";
import Quotes from "../../Components/Quotes/Quotes";



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
  }, [blogID]);
  return (
    <>
      <Header />
      <BlogTitle />

      <div className="blog-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {blogItems ? (
                <article className="postbox post format-image mb-40">
                  {blogItems.video1 ? (
                    <div className="postbox__video mb-35">
                      <img src={blogItems.video1} alt="blogimage" />
                      <Link
                        onClick={handleOpen}
                        className="popup-video video-btn"
                      >
                        <i className="fas fa-play"></i>
                      </Link>
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
                    <div className="postbox__thumb mb-35">
                      <img src={blogItems.image1} alt="blogimage" />
                    </div>
                  )}
                  <div className="postbox__text bg-none">
                    <div className="post-meta mb-15">
                      <span>
                        <i className="far fa-calendar-check"></i> {blogItems.date}{" "}
                      </span>
                      <span>
                        <Link href="#">
                          <i className="far fa-user"></i> MD. Salim Rana
                        </Link>
                      </span>
                      <span>
                        <Link href="#">
                          <i className="far fa-comments"></i> 2 Comments
                        </Link>
                      </span>
                    </div>
                    <h3 className="blog-title">{blogItems.title}</h3>
                    <div className="post-text mb-20">
                      <p>{blogItems.desc1}</p>
                      <p>{blogItems.desc2}</p>
                      <Quotes />
                      <p>{blogItems.desc3}</p>
                      <div className="blog-inner-img mb-30 mt-30">
                        <img src={blogItems.image2} alt="blogimage" />
                      </div>
                      <div className="inner-content">
                        <h4>{blogItems.subtitle1}</h4>
                        <p>{blogItems.desc4}</p>
                      </div>
                      <div className="inner-content">
                        <h4>{blogItems.subtitle2}</h4>
                        <p>{blogItems.desc5}</p>
                      </div>
                    </div>
                    <div className="row mt-50">
                      <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                        <div className="blog-post-tag">
                          <span>Releted Tags</span>
                          <Link href="#">organic</Link>
                          <Link href="#">Foods</Link>
                          <Link href="#">tasty</Link>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                        <div className="blog-share-icon text-left text-md-right">
                          <span>Share: </span>
                          <Link href="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-vimeo-v"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="navigation-border pt-50 mt-40"></div>
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-5">
                        {prevBlogItems ? (
                          <div className="bakix-navigation b-next-post text-left mb-30">
                            <span>
                              <Link to={`/blog/${blogID - 1}`}>Prev Post</Link>
                            </span>
                            <h4>
                              <Link href="/blog/1">{prevBlogItems.title}</Link>
                            </h4>
                          </div>
                        ) : null}
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 ">
                        <div className="bakix-filter text-left text-md-center mb-30">
                          <Link href="#">
                            <img
                              style={{ width: "40px" }}
                              src="https://vue-plum-chi.vercel.app/img/icon/filter.png"
                              alt="filter"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-5">
                        {nextBlogItems ? (
                          <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
                            <span>
                              <Link to={`/blog/${blogID + 1}`}>Next Post</Link>
                            </span>
                            <h4>
                              <Link href="/blog/2">{nextBlogItems.title}</Link>
                            </h4>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="author mt-80 mb-40">
                    <div className="author-img text-center">
                      <img
                        style={{ width: "120px" }}
                        src="https://vue-plum-chi.vercel.app/img/blog/details/author.png"
                        alt="Authorimage"
                      />
                    </div>
                    <div className="author-text text-center">
                      <h3>MD. Salim Rana</h3>
                      <div className="author-icon">
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-behance-square"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-youtube"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-vimeo-v"></i>
                        </Link>
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
                  <div className="post-comments">
                    <div className="blog-coment-title mb-30">
                      <h2>02 Comments</h2>
                    </div>
                    <div className="latest-comments">
                      <ul>
                        <li>
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <img
                                src="https://vue-plum-chi.vercel.app/img/blog/details/comments1.png"
                                alt="profilePic"
                              />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name">
                                <h5>Karon Balina</h5>
                                <span>19TH MAY 2018</span>
                                <Link className="reply" href="#">
                                  <i className="fas fa-reply"></i>Reply
                                </Link>
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
                            <li className="children">
                              <div
                                className="comments-box"
                                style={{
                                  padding: "30px 0px",
                                  borderTop: "1px solid rgb(234, 237, 255)",
                                }}
                              >
                                <div className="comments-avatar">
                                  <img
                                    src="https://vue-plum-chi.vercel.app/img/blog/details/comments1.png"
                                    alt="Profile Pic"
                                  />
                                </div>
                                <div className="comments-text">
                                  <div className="avatar-name">
                                    <h5>Karon Balina</h5>
                                    <span>19TH MAY 2018</span>
                                    <Link className="reply" href="#">
                                      <i className="fas fa-reply"></i>Reply
                                    </Link>
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
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <img
                                src="https://vue-plum-chi.vercel.app/img/blog/details/comments2.png"
                                alt="profilePic"
                              />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name">
                                <h5>Arista Williamson</h5>
                                <span>19TH MAY 2018</span>
                                <Link className="reply" href="#">
                                  <i className="fas fa-reply"></i>Reply
                                </Link>
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
                  <div className="post-comments-form">
                    <div className="post-comments-title">
                      <h2>Post Comments</h2>
                    </div>
                    <form
                      id="contacts-form"
                      className="conatct-post-form"
                      action="#"
                    >
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="contact-icon contacts-message">
                            <textarea
                              name="comments"
                              id="comments"
                              cols="30"
                              rows="10"
                              placeholder="Your Comments...."
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="contact-icon contacts-name">
                            <input type="text" placeholder="Your Name.... " />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="contact-icon contacts-email">
                            <input type="email" placeholder="Your Email...." />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="contact-icon contacts-website">
                            <input type="text" placeholder="Your Website...." />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <button className="btn theme-btn" type="submit">
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
              <aboutMe />
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
