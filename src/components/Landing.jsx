import React from "react";

const Landing = () => {
  return (
    <section id="landing">
      <header>  
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded online library platform</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse books</button>
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Landing;
