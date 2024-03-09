import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
const Result = ({ data }) => {
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    if (data !== "") {
      setIsloading(false);
    }
  }, [data]);
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          {isloading ? (
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div>
              <div className="text-center">
                <h2 className="name rob">Hi {data.name} 😊</h2>
              </div>
              <div className="flex problem  p-2">
                <div className=" text-center m-1">
                  <h3>Easy</h3>
                  <h4 className="rob">
                    <CountUp end={data.easy} />
                  </h4>
                </div>
                <div className="  text-center m-1">
                  <h3>Medium</h3>
                  <h4 className="rob">
                    <CountUp end={data.medium} />
                  </h4>
                </div>
                <div className="   text-center m-1">
                  <h3>Hard</h3>
                  <h4 className="rob">
                    <CountUp end={data.hard} />
                  </h4>
                </div>
              </div>
              <h1 className="text-center rob">
                <CountUp end={data.value} /> $
              </h1>
                <p className="text-muted pop">Success comes from consistency, not from luck </p>
            </div>
          )}

        </div>

      </div>

      <a href="https://www.linkedin.com/in/nandhakrishnanp/"> <h5 className="pop text-white text-center">Developed By Nandhakrishnan </h5> </a> 
    </div>
  );
};

export default Result;
