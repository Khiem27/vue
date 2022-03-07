import React from "react";

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
          <a href="#">
            Lifestyle <span class="f-right">78</span>
          </a>
        </li>
        <li>
          <a href="#">
            Travel <span class="f-right">42</span>
          </a>
        </li>
        <li>
          <a href="#">
            Fashion <span class="f-right">32</span>
          </a>
        </li>
        <li>
          <a href="#">
            Music <span class="f-right">85</span>
          </a>
        </li>
        <li>
          <a href="#">
            Branding <span class="f-right">05</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
