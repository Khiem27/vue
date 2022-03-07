import React from "react";
import {
  Link
} from "react-router-dom";
Categories.propTypes = {};

function Categories(props) {
  return (
    <div class="widget mb-40">
      <div class="widget-title-box mb-30">
        <span class="animate-border"></span>
        <h3 class="widget-title">Categories</h3>
      </div>
      <ul class="cat">
        <li>
          <Link>
            Lifestyle <span class="f-right">78</span>
          </Link>
        </li>
        <li>
          <Link>
            Travel <span class="f-right">42</span>
          </Link>
        </li>
        <li>
          <Link>
            Fashion <span class="f-right">32</span>
          </Link>
        </li>
        <li>
          <Link>
            Music <span class="f-right">85</span>
          </Link>
        </li>
        <li>
          <Link>
            Branding <span class="f-right">05</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
