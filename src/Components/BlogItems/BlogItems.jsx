import React, { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";
import BlogsApi from "../../Api/Blogs/BlogsApi";
import Pagination from "../Pagination/Pagination";


BlogItems.propTypes = {};

function BlogItems(props) {
  const [blogItems, setBlogItems] = useState([]);

    // Pagination
    const [posts, setPosts] = useState([]);
    // Trang mặc đinh
    const [currentPage, setCurrentPage] = useState(1);
    // Số products/trang
    const [postsPerPage] = useState(2);
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    // Active pagination
    const [indexPagination, setIndexPagination] = useState(0);
    const handleActivePagination = (action) => {
      if (action === "increase") {
        setIndexPagination(indexPagination + 1);
      } else if (action === "decrease") {
        setIndexPagination(indexPagination - 1);
      } else {
        setIndexPagination(action);
      }
    };
  
    // Pagination end

  useEffect(() => {
    const getBlogsApi = async () => {
      const getAllData = await BlogsApi.getAll();
      const getAllBlogItems = getAllData.data;
      setBlogItems(getAllBlogItems);
      let newArr = getAllBlogItems

      let arrPagination = newArr;
      arrPagination = arrPagination.slice(indexOfFirstPost, indexOfLastPost);
      setPosts(arrPagination);
    };
    getBlogsApi();

  }, [indexOfFirstPost, indexOfLastPost]);

  return (
    <>
      {posts.length > 0
        ? posts.map((item, index) => {
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
         {blogItems ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={blogItems.length}
            paginate={paginate}
            handleActivePagination={handleActivePagination}
            indexPagination={indexPagination}
          />
        ) : null}
    </>
  );
}

export default BlogItems;
