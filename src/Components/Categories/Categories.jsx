import React from "react";
import {
    Link
} from "react-router-dom";
Categories.propTypes = {};

function Categories(props) {
  return (
    <div className="widget mb-40">
      <div className="widget-title-box mb-30">
        <span className="animate-border"></span>
        <h3 className="widget-title">Categories</h3>
      </div>
      <ul className="cat">
        <li>
          <Link>
            Lifestyle <span className="f-right">78</span>
          </Link>
        </li>
        <li>
          <Link>
            Travel <span className="f-right">42</span>
          </Link>
        </li>
        <li>
          <Link>
            Fashion <span className="f-right">32</span>
          </Link>
        </li>
        <li>
          <Link>
            Music <span className="f-right">85</span>
          </Link>
        </li>
        <li>
          <Link>
            Branding <span className="f-right">05</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
