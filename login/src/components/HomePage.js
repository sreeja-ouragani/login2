import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
 // Optional: For styling



function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="heading">Welcome to HomePage</h1>
      <div className="image-links-container">
        {/* Use imported image from src folder */}
        <Link to="/page1" className="image-link">
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/p1.jpg`} alt="Link to Page 1" className="link-image" />
            <div className="image-text">Lectures</div>
          </div>
        </Link>

        {/* Access image from the public folder */}
        <Link to="/page2" className="image-link">
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/p1.jpg`} alt="Link to Page 2" className="link-image" />
            <div className="image-text">Fun Tasks</div>
          </div>
        </Link>

        {/* Example of accessing another image in the public folder */}
        <Link to="/page3" className="image-link">
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/p1.jpg`} alt="Link to Page 3" className="link-image" />
            <div className="image-text">Tests</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

