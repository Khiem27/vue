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
                class="postbox post format-image mb-40 d-block"
                key={index}
              >
                {item.image1 ? (
                  <div class="postbox__thumb">
                    <img src={item.image1} alt="blog image" />
                  </div>
                ) : null}
                {item.video1 ? (
                  <div class="postbox__video">
                    <img src={item.video1} alt="blog image" />
                    <a class="popup-video video-btn" href="javascript:void(0)">
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                ) : null}
                <div class="postbox__text p-50">
                  <div class="post-meta mb-15">
                    <span>
                      <i class="far fa-calendar-check"></i> {item.date}{" "}
                    </span>
                    <span>
                      <a href="#">
                        <i class="far fa-user"></i>
                        {item.author}
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="far fa-comments"></i> {item.comments} Comments
                      </a>
                    </span>
                  </div>
                  <h3 class="blog-title">
                    <Link to={`/blog/${item.id}`}>{item.title}</Link>
                  </h3>
                  <div class="post-text mb-20">
                    <p>{item.desc1}</p>
                  </div>
                  <div class="read-more mt-30">
                    <Link class="btn theme-btn" to={`/blog/${item.id}`}>
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
