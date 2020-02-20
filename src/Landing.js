import React from 'react';
import './App.css';

function Landing() {
  return (
    // <div className="App">
    //   <div className="bgWrapper">
    //     <div>
    //       <input type="text" placeholder="Search by Title or Author" className="txtLandingPage_SearchText" />
    //     </div>
    //   </div>
    // </div>      
    <div className="container">
      <div className="row">
        <div className="col-md-9" style={{paddingLeft:"12px"}}><span className="page-title">Book Details</span></div>
        <div className="col-md-3 contentActionBtn"><button className="btnStyling">SAVE</button></div>
      </div>
      <div className="bread-crums">HOME > SELL</div>
      <div className="content-sell">
        <div className="row">
          <div className="col-md-6">
            Book Title (as printed on the cover)<span className="required">*</span>
            <div>
              <input type="text" name="name" placeholder="Please Enter Book Title" required />
            </div>
          </div>
          <div className="col-md-6">
            ISBN<span className="required">*</span>
            <div>
              <input type="text" name="name" placeholder="Please Enter ISBN" required />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            Description<span className="required">*</span>
            <div>
              <textarea name="message" className="sellTextArea" placeholder="Please Enter Description for the Book"></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            Upload Image<span className="required">*</span>
            <div>
              <input type="file" id="img" name="img" accept="image/*" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
