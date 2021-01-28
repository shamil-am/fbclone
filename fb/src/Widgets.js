import React from "react";
import "./Widgets.css";

//
function Widgets() {
  return (
    <div className="widgets">
       <div
        className="fb-page"
        data-href="https://www.facebook.com/buildprogrammers"
        data-tabs="timeline"
        data-width="300px"
        data-height="1500px"
        data-small-header="true"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/ozmostudio/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/ozmostudio/">Baby_photography</a>
        </blockquote>
      </div>
    </div>
  );
}

export default Widgets;
