import React from 'react'

export const TopHeader = () => {
  return (
    <div className="top-panel-adv">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-10">
              <div className="panel-left-content">
                <h4 className="mb-0">
                <marquee> Welcome to Multikart!! Delivery in <span>10 Minutes.</span></marquee>   {" "}
                </h4>
                <div className="delivery-area d-md-block d-none">
                  <div>
                    <h5>Limited Time offer</h5>
                    <h4>code: 25FsfuABdS</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <a href="javascript:void(0)" className="close-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
