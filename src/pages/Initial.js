import React from "react";
import { useNavigate } from "react-router-dom";
import "./Initial.css"
function Initial() {
  const navigate=useNavigate();
  const handleClick = () => {
    navigate("/start");
  }
    return <div>
   <img src="frontend/src/pages/i3.JPG" />
    <section class="w3l-content-4 py-5" id="features">
      <div class="content-4-main py-lg-5 py-md-4">
        <div class="container">
          <div class="title-content text-center">
            <h6 class="title-subhny">Extraordinary Services</h6>
            <h3 class="title-w3l mb-sm-5 mb-4 pb-lg-2">Our Services.</h3>
          </div>
          <div class="content-info-in row">
            <div class="content-left col-lg-6">
              <div class="row content4-right-grids mb-sm-5 mb-4">
                <div class="col-lg-2 col-3 content4-right-icon">
                  <div class="content4-icon icon-clr1">
                    <span class="fa fa-american-sign-language-interpreting"></span>
                  </div>
                </div>
                <div class="">
                  <h6><a href="#url">Therapiya</a></h6>
                  <p>Understanding why people suffer, how they change, and how to help them live satisfying lives is a fascinating and important undertaking.</p>
                </div>
              </div>
              <div class="">
                <div class="col-lg-2 col-3 content4-right-icon">
                  <div class="content4-icon icon-clr2">
                    <span class="fa fa-superpowers"></span>
                  </div>
                </div>
                <div class="">
                  <h6><a href="#url">Dentistry</a></h6>
                  <p>Be true to your teeth and they won’t be false to you!</p>
                </div>
              </div>
              <div class="">
                <div class="col-lg-2 content4-right-icon">
                  <div class="content4-icon icon-clr2">
                    <span class="fa fa-snowflake-o"></span>
                  </div>
                </div>
                <div class="">
                  <h6><a href="#url">Virusology</a></h6>
                  <p>A strong feeling of adventure is animating those who are working on bacterial viruses, a feeling that they have a small part in the great drive towards a fundamental problem in biology.</p>
                </div>
              </div>
            </div>
            <div class="content-right col-lg-6 pl-lg-4 mt-lg-0 mt-2">
              <div class="row content4-right-grids mb-sm-5 mb-4">
                <div class="col-lg-2 col-3 content4-right-icon">
                  <div class="content4-icon icon-clr3">
                    <span class="fa fa-building-o"></span>
                  </div>
                </div>
                <div class="">
                  <h6><a href="#url">Pharmocology</a></h6>
                  <p>Pharmacology is benefited by the prepared mind. You need to know what you are looking for.
                  </p>
                </div>
              </div>
              <div class="">
                <div class="col-lg-2 col-3 content4-right-icon">
                  <div class="content4-icon icon-clr4">
                    <span class="fa fa-heartbeat"></span>
                  </div>
                </div>
                <div class="">
                  <h6><a href="#url"> Cardiology</a></h6>
                  <p>The most chronic heart disease is caused by having greediness in your heart. Go for check-ups regularly and learn how to swallow those lumpy pills of generousity. Be kind and be healthy.</p>
                </div>
              </div>
              <div class="row content4-right-grids">
                <div class="col-lg-2 col-3 content4-right-icon">
                  <div class="content4-icon icon-clr4">
                    <span class="fa fa-eye"></span>
                  </div>
                </div>
                <div class="">
                  <h6><a href="#url"> Eye Surgery</a></h6>
                  <p>Clever plastic surgery can restore an appearance of youth, but nothing changes the expression of age and experience in the eyes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <button onClick={handleClick} className="btn">start</button>
    </div>
}

export default Initial;