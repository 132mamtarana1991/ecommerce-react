import React from "react";

export default function Category({categories, image, id}) {
  return (

        <div className="col" key={id} >
          <div  style={{ width: "100%", display: "inline-block", background: '#f2fce4' }}>
            <a href="category-page(vegetables).html" tabindex="0">
              <div class={"category-boxes" + ' ' + 'bg' + id}>
                <div class="img-sec">
                  <img
                    src={image}
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <h4>{categories}</h4>
              </div>
            </a>
          </div>
        </div>
  );
}
