import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import BlogsApi from "../../Api/Blogs/BlogsApi";


BlogItems.propTypes = {};

function BlogItems(props) {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    const getBlogsApi = async () => {
      const getAllData = await BlogsApi.getAll();
      const getAllBlogItems = getAllData.data;
      setBlogItems(getAllBlogItems);
    };
    getBlogsApi();
  }, []);

  return (
    <>
      {blogItems.length > 0
        ? blogItems.map((item, index) => {
            return (
              <article
                className="postbox post format-image mb-40 d-block"
                key={index}
              >
                {item.image1 ? (
                  <div className="postbox__thumb">
                    <img src={item.image1} alt="blogimage" />
                  </div>
                ) : null}
                {item.video1 ? (
                  <div className="postbox__video">
                    <img src={item.video1} alt="blogimage" />
                    <Link className="popup-video video-btn">
                      <i className="fas fa-play"></i>
                    </Link>
                  </div>
                ) : null}
                <div className="postbox__text p-50">
                  <div className="post-meta mb-15">
                    <span>
                      <i className="far fa-calendar-check"></i> {item.date}{" "}
                    </span>
                    <span>
                      <Link>
                        <i className="far fa-user"></i>
                        {item.author}
                      </Link>
                    </span>
                    <span>
                      <Link>
                        <i className="far fa-comments"></i> {item.comments} Comments
                      </Link>
                    </span>
                  </div>
                  <h3 className="blog-title">
                    <Link to={`/blog/${item.id}`}>{item.title}</Link>
                  </h3>
                  <div className="post-text mb-20">
                    <p>{item.desc1}</p>
                  </div>
                  <div className="read-more mt-30">
                    <Link className="btn theme-btn" to={`/blog/${item.id}`}>
                      read more
                    </Link>
                  </div>
                </div>
              </article>
            );
          })
        : null}
    </>
  );
}

export default BlogItems;
