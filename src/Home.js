import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ sendInputToApi, url, setUrl, icon }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="text-center">
          <img className="img-fluid" src={icon} alt="" />
        </div>

        <h3 className="rob p-2">WorthofGeeks.com</h3>

        {/* Input field for URL */}
        <input
          className="input_box"
          type="text"
          placeholder="Enter Your GFG Profile Link"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        /> <br />

        <div className="text-center">
          {/* Conditional rendering of the Link */}
          {url ? (
            <Link to="/Result">
              <button
                className="btn pop btn-success"
                onClick={sendInputToApi}
              >
                Check Worth
              </button>
            </Link>
          ) : (
            <button className="btn pop btn-success" disabled>
              Check Worth
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
