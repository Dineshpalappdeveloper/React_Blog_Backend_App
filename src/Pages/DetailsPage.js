import React, { Suspense, useEffect, useState } from 'react'
import axios from 'axios';

import "./DetailsPage.css";
import clapping from "../logo/clapping.png";
import SmallCard from "../Components/SmallCard";
import Fixed from "../Components/Fixed";
import Writer from "../Components/Writer";
import persion from "../logo/man.png";
import { NavLink, useNavigate } from "react-router-dom";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

const DetailsPage = () => {


  const navi = useNavigate();
  const url = window.location.href;
  const orUrl = url.split("/").pop();
  let url1 = Number(orUrl);
  const [orid, setid] = useState(url1);
  let min1 = 1;
  console.log(orid);
  if (url1 < 7) {
    min1 = 1;
  } else if (url1 > 6 && url1 < 13) {
    min1 = 7;
  } else if (url1 > 13 && url1 < 23) {
    min1 = 13;
  } else if (url1 > 22 && url1 < 29) {
    min1 = 23;
  } else {
    min1 = 30;
  }
  let max = min1 + 2;

  console.log("url", url1);
  const [details, setDetails] = useState(null)
  console.log(details);

  useEffect(() => {
    axios.get('https://dinesh-blog-app.onrender.com/bihar')
      .then(response => response.data)
      .then(biharData => {
        console.log(biharData, "bihari bubu")
        setDetails(biharData)

      }
      )
  }, [])
  console.log(details);
  function idHandler() {
    const url = window.location.href;
    const orUrl = url.split("/").pop();
    console.log("clicked");
    let url1 = Number(orUrl);
    setid(url1);
    navi(`/${url1}`)

  }
  function navigation() {
    navi("/");
  }
  // useEffect(() => {
  //   window.scrollTo(50, 8000000000)
  // }, [])
  console.log("hello");
  return (
    <div>
      {
        details == null ? <h1 className='homePageload'>loading...</h1> : <Suspense fallback={<h1>Loading...</h1>}>
          <div className="header2Parent">
            <Header2 />

          </div>

          <div className="latest-one details-parent ">
            {details && details
              .filter((item) => item.id === url1)
              .map((data) => {
                return (
                  <>
                    {
                      <div className="data1-singlepage">
                        <h1 className="heading">{data.title}</h1>
                        <SmallCard />
                        <div style={{ zIndex: 1 }} className="fixed-res">
                          <Fixed />
                        </div>
                        <img
                          src={data.img}
                          alt="not found"
                          className={"latest-card1 singlepage-img "}
                        />

                        <h5 className="details-des">{data.description}...</h5>
                        <div className="language">
                          <button className="bt-language">React</button>
                          <button className="bt-language">Javascript</button>
                          <button className="bt-language">Animation</button>
                        </div>
                        <div className="clap-counts">
                          <div className="fixed-sub">
                            <div
                              className="fixed-img bg"
                              style={{ backgroundImage: `url(${clapping})` }}
                            ></div>
                            <div className="fixed-text">4.9M</div>
                          </div>
                        </div>
                        <div className="writer-respo">
                          {" "}
                          <Writer />
                        </div>
                        <button className="backWeb" onClick={() => {
                          navi(-1)
                        }}>Back</button>
                      </div>
                    }
                  </>
                );
              })}
          </div>

          <div>
            <br className="res-diveder"></br>
            <div className="more-serin" style={{ zIndex: 5 }}>
              <h3 className="more-heading ">More From The Siren</h3>

              <div className="more-parent">
                <div className="latest-one more-one">
                  {details && details
                    .filter((item) => item.id >= min1 && item.id <= max)
                    .map((data) => {
                      return (
                        <>
                          {
                            <NavLink
                              to={`/${data.id}`}
                              className={"home1"}
                              onClick={() => {
                                idHandler();
                              }}
                            >
                              <div className="related">related reads</div>
                              <img
                                src={data.img}
                                alt="not found"
                                className={"latest-card1 more-siren-ipad"}
                                onClick={() => {
                                  idHandler();
                                }}
                              />

                              <h2
                                className="more-main-title"
                                onClick={() => {
                                  idHandler();
                                }}
                              >
                                {data.title}
                              </h2>
                              <div
                                className="smallCard-containeer more-dev"
                                onClick={() => {
                                  idHandler();
                                }}
                              >
                                <div className="smallcard-parent res-more-seren-dev hides">
                                  <div>
                                    <div
                                      className="smallcard-persion-img bg hides"
                                      style={{ backgroundImage: `url(${persion})` }}
                                    ></div>
                                  </div>
                                  <div className="smallcard-userdata write-data hides">
                                    <div></div>
                                    <div className="h5 hides">Dinesh kumar</div>
                                    <div className="hides">5 August 2023</div>
                                  </div>
                                </div>
                              </div>
                            </NavLink>
                          }
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
            <button onClick={navigation} className="goBack">
              Go Back
            </button>
          </div>
          <div className="footer-parent">
            <Footer />
          </div>

        </Suspense>

      }
    </div>
  );
};

export default DetailsPage;
