import React from "react";
import Header from "../Header";
import Contact from "../Contact";

const About = () => {
  return (
    <div>
        <Header/>
      <section className="my-hei p-5">
        <div className='container'>
          <div className='row'>
            <div className="col-6">
              <h2 className="my-hei">
                Lorem Ipsum Dolar Theoro
              </h2>
              <p>
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              </p>

            </div>
            <div className="col-6">
<img src="assets/img/about.png" alt='hello' className='bordered-image img-fluid'/>
            </div>
          </div>
        </div>
      </section>
      <Contact/>
    </div>
  );
};

export default About;
