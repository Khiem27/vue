import React, { useEffect, useState } from 'react';
import {
    Link,
    useParams
} from "react-router-dom";
import BlogsApi from '../../Api/Blogs/BlogsApi';

PopularFeeds.propTypes = {
    
};

function PopularFeeds(props) {
    const [prevBlogItems, setPrevBlogItems] = useState(null)
    const [prevBlogItems1, setPrevBlogItems1] = useState(null)
    const [blogItems, setBlogItems] = useState([])
    const [nextBlogItems, setNextBlogItems] = useState(null)
    const [nextBlogItems1, setNextBlogItems1] = useState(null)
    let { blogID } = useParams();
    useEffect(() => {
        const getBlogsApi = async () => {
            const getOneData = await BlogsApi.getOne(blogID - 1)
            const getOneBlogItems = getOneData.data
            setBlogItems(getOneBlogItems)
            // prev
            if (blogID !== 1) {
                const PrevgetOneData = await BlogsApi.getOne(blogID - 2)
                const PrevgetOneBlogItems = PrevgetOneData.data
                setPrevBlogItems(PrevgetOneBlogItems)
            } 

            if (blogID === 1) {
                const PrevgetOneData1 = await BlogsApi.getOne(9)
                const PrevgetOneBlogItems1 = PrevgetOneData1.data
                setPrevBlogItems1(PrevgetOneBlogItems1)
            } 
            // next
            if (blogID !== 10) {
                const NextgetOneData = await BlogsApi.getOne(blogID)
                const NextgetOneBlogItems = NextgetOneData.data
                setNextBlogItems(NextgetOneBlogItems)
            } 

            if (blogID === 10) {
                const NextgetOneData1 = await BlogsApi.getOne(0)
                const NextgetOneBlogItems1 = NextgetOneData1.data
                setNextBlogItems1(NextgetOneBlogItems1)
            } 
        }
        getBlogsApi()
    }, [blogID])

    return (
    <div className="widget mb-40">
        <div className="widget-title-box mb-30"><span className="animate-border"></span>
            <h3 className="widget-title">Popular Feeds</h3></div>
        <ul className="recent-posts">
            <li className="d-none">
                <div className="widget-posts-image">
                    {
                        blogItems.image1 ? 
                        <Link to={`/blog/${blogID}`}><img src={blogItems.image1} alt="blog"/></Link>
                        :
                        <Link to={`/blog/${blogID}`}><img src={blogItems.video1} alt="blog"/></ Link>
                    }
                </div>
                <div className="widget-posts-body">
                    <h6 className="widget-posts-title"><Link to={`/blog/${blogID}`}>{blogItems.title}</Link></h6>
                    <div className="widget-posts-meta"> {blogItems.date} </div>
                </div>
            </li>
            {
                prevBlogItems ? 
                <li className="">
                    <div className="widget-posts-image">
                        {
                            prevBlogItems.image1 ? 
                            <Link to={`/blog/${prevBlogItems.id}`}><img src={prevBlogItems.image1} alt="blog"/></Link>
                            :
                            <Link to={`/blog/${prevBlogItems.id}`}><img src={prevBlogItems.video1} alt="blog"/></Link>
                        }
                    </div>
                    <div className="widget-posts-body">
                        <h6 className="widget-posts-title"><Link to={`/blog/${prevBlogItems.id}`}>{prevBlogItems.title}</Link></h6>
                        <div className="widget-posts-meta"> {prevBlogItems.date} </div>
                    </div>
                </li>
                : null
            }
            {
                prevBlogItems1 ?
                <li className="">
                    <div className="widget-posts-image">
                        {
                            prevBlogItems1.image1 ? 
                            <Link to={`/blog/${prevBlogItems1.id}`}><img src={prevBlogItems1.image1} alt="blog"/></Link>
                            :
                            <Link to={`/blog/${prevBlogItems1.id}`}><img src={prevBlogItems1.video1} alt="blog"/></Link>
                        }
                    </div>
                    <div className="widget-posts-body">
                        <h6 className="widget-posts-title"><Link to={`/blog/${prevBlogItems1.id}`}>{prevBlogItems1.title}</Link></h6>
                        <div className="widget-posts-meta"> {prevBlogItems1.date} </div>
                    </div>
                </li>
                : null
            }
            {
                nextBlogItems ? 
                <li className="">
                    <div className="widget-posts-image">
                        {
                            nextBlogItems.image1 ?
                            <Link to={`/blog/${nextBlogItems.id}`}><img src={nextBlogItems.image1} alt="blog"/></Link>
                            : 
                            <Link to={`/blog/${nextBlogItems.id}`}><img src={nextBlogItems.video1} alt="blog"/></Link>
                        }
                    </div>
                    <div className="widget-posts-body">
                        <h6 className="widget-posts-title"><Link to={`/blog/${nextBlogItems.id}`}>{nextBlogItems.title}</Link></h6>
                        <div className="widget-posts-meta"> {nextBlogItems.date} </div>
                    </div>
                </li>
                : null
            }
            {
                nextBlogItems1 ? 
                <li className="">
                    <div className="widget-posts-image">
                        {
                            nextBlogItems1.image1 ?
                            <Link to={`/blog/${nextBlogItems1}`}><img src={nextBlogItems1.image1} alt="blog"/></Link>
                            : 
                            <Link to={`/blog/${nextBlogItems1}`}><img src={nextBlogItems1.video1} alt="blog"/></Link>
                        }
                    </div>
                    <div className="widget-posts-body">
                        <h6 className="widget-posts-title"><Link to={`/blog/${nextBlogItems1}`}>{nextBlogItems1.title}</Link></h6>
                        <div className="widget-posts-meta"> {nextBlogItems1.date} </div>
                    </div>
                </li>
                : null
            }
        </ul>
    </div>
    );
}

export default PopularFeeds;