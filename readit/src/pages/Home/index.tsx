import React from 'react';

import './index.css';

const Home = () => {
  return (
    <main>
      <div className="landing-container">
        <div className="landing-content">
          <div className="landing-text">
            <h1>
              Make github project readme easy and fast<span>.</span>
            </h1>

            <p>
              A generator that help you to make beautiful and complete readme.
              Let’s take a look?
            </p>
          </div>
          <div className="landing-buttons">
            <button className="def">Generate</button>
            <button className="out">Support Us</button>
          </div>
        </div>

        <div className="landing-image">
          <p>aqui vai a imagem</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
