import React, { Suspense, useEffect, useState } from 'react'
import axios from 'axios';

import "./Home.css";
import "../Components/Footer.css"
import { NavLink } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Home = (props) => {
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

  return (

    <div className="home-super-parent">
      <Header />

      {
        // console.log(details, "checking")
        details == null ? <h1 className='homePageload'>loading...</h1> : <Suspense fallback={<h1>Loading...</h1>}>
          <div className="home-first-card-containeer">
            <div className="left-side">
              {details && details
                .filter((item) => item.id === 41)
                .map((data) => {
                  return (
                    <>
                      {
                        <NavLink to={`/${data.id}`} className={"home1"} >

                          <img
                            src={data.img}
                            alt="not found"
                            className={"left-card1"}
                          />
                        </NavLink>
                      }
                    </>
                  );
                })}
            </div>
            <div className="right-side">
              {details && details
                .filter((item) => item.id === 15)
                .map((data) => {
                  return (
                    <>
                      {
                        <NavLink to={`/${data.id}`} className={"home1"} >
                          <img
                            src={data.img}
                            alt="not found"
                            className={"left-card2"}
                          />
                        </NavLink>
                      }
                    </>
                  );
                })}
              {details && details
                .filter((item) => item.id === 42)
                .map((data) => {
                  return (
                    <>
                      {
                        <NavLink to={`/${data.id}`} className={"home1"} >
                          <img
                            src={data.img}
                            alt="not found"
                            className={"left-card3"}
                          />
                        </NavLink>
                      }
                    </>
                  );
                })}
            </div>
          </div>


          <div className='body-section'>
            <h3 className="sub-title sub-title1">The Latest</h3>
            <hr className="sub-heading-hr" />
            <div className="the-latest-parent">
              <div className="latest-one  ">
                {details && details
                  .filter((item) => item.id === 41)
                  .map((data) => {
                    return (
                      <>
                        {
                          <NavLink to={`/${data.id}`} className={"home1"} >
                            <img
                              src={data.img}
                              alt="not found"
                              className={"latest-card1"}
                            />

                            <h3>{data.title}</h3>
                            <h5>{data.description.slice(0, 150)}...</h5>
                            <h4>
                              Travel{" "}
                              <span className="travel-time">/August 21 2023</span>{" "}
                            </h4>
                          </NavLink>
                        }
                      </>
                    );
                  })}
              </div>
              <div className="latest-one">
                {details && details
                  .filter((item) => item.id === 15)
                  .map((data) => {
                    return (
                      <>
                        {
                          <NavLink to={`/${data.id}`} className={"home1"} >
                            <img
                              src={data.img}
                              alt="not found"
                              className={"latest-card1"}
                            />
                            {/* <br/> */}
                            <h3>{data.title}</h3>
                            <h5>{data.description.slice(0, 150)}...</h5>
                            <h4>
                              Travel{" "}
                              <span className="travel-time">/August 21 2023</span>{" "}
                            </h4>
                          </NavLink>
                        }
                      </>
                    );
                  })}
              </div>
              <div className="latest-one">
                {details && details
                  .filter((item) => item.id === 42)
                  .map((data) => {
                    return (
                      <>
                        {
                          <NavLink to={`/${data.id}`} className={"home1"} >
                            <img
                              src={data.img}
                              alt="not found"
                              className={"latest-card1"}
                            />
                            {/* <br/> */}
                            <h3>{data.title}</h3>
                            <h5>{data.description.slice(0, 150)}...</h5>
                            <h4>
                              Travel{" "}
                              <span className="travel-time">/August 21 2023</span>{" "}
                            </h4>
                          </NavLink>
                        }
                      </>
                    );
                  })}
              </div>
            </div>

            <h3 className="sub-title sub-title1 ">Latest Articles</h3>
            <hr className="sub-heading-hr" />
            <div className="latest-Articles">
              <div className="latest-Articles-parent">
                <div className="articles-one none1">
                  <hr className="Articles-hr" />

                  {details && details
                    .filter((item) => item.id === 5)
                    .map((data) => {
                      return (
                        <>
                          {

                            <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
                              <div>
                                <img
                                  src={data.img}
                                  alt="not found"
                                  className={"latest-card1 latest_art1"}
                                />
                              </div>
                              <div className="article-image-details">
                                <h3>{data.title}</h3>
                                <h5>{data.description.slice(0, 150)}...</h5>
                                <span>
                                  Travel
                                  <span className="travel-time">
                                    /August 21 2023
                                  </span>{" "}
                                </span>
                              </div>

                            </NavLink>
                          }
                        </>
                      );
                    })}
                </div>
                <div className="articles-one">
                  <hr className="Articles-hr" />

                  {details && details
                    .filter((item) => item.id === 13)
                    .map((data) => {
                      return (
                        <>
                          {
                            <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
                              <div>
                                <img
                                  src={data.img}
                                  alt="not found"
                                  className={"latest-card1 latest_art1"}
                                />
                              </div>
                              <div className="article-image-details">
                                <h3>{data.title}</h3>
                                <h5>{data.description.slice(0, 150)}...</h5>
                                <span>
                                  Travel
                                  <span className="travel-time">
                                    /August 21 2023
                                  </span>{" "}
                                </span>
                              </div>
                            </NavLink>
                          }
                        </>
                      );
                    })}
                </div>
                <div className="articles-one">
                  <hr className="Articles-hr" />

                  {details && details
                    .filter((item) => item.id === 14)
                    .map((data) => {
                      return (
                        <>
                          {
                            <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
                              <div>
                                <img
                                  src={data.img}
                                  alt="not found"
                                  className={"latest-card1 latest_art1"}
                                />
                              </div>
                              <div className="article-image-details">
                                <h3>{data.title}</h3>
                                <h5>{data.description.slice(0, 150)}...</h5>
                                <span>
                                  Travel
                                  <span className="travel-time">
                                    /August 21 2023
                                  </span>{" "}
                                </span>
                              </div>
                            </NavLink>
                          }
                        </>
                      );
                    })}
                </div>
                <div className="articles-one">
                  <hr className="Articles-hr" />

                  {details && details
                    .filter((item) => item.id === 16)
                    .map((data) => {
                      return (
                        <>
                          {
                            <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
                              <div>
                                <img
                                  src={data.img}
                                  alt="not found"
                                  className={"latest-card1 latest_art1"}
                                />
                              </div>
                              <div className="article-image-details">
                                <h3>{data.title}</h3>
                                <h5>{data.description.slice(0, 150)}...</h5>
                                <span>
                                  Travel
                                  <span className="travel-time">
                                    /August 21 2023
                                  </span>{" "}
                                </span>
                              </div>
                            </NavLink>
                          }
                        </>
                      );
                    })}
                </div>
              </div>

              <div className="advatige">
                <h2 className="advatige-text">advertistment</h2>
              </div>
            </div>
            <div className="top-post">
              <div className="top-post-parent">
                <div className="top-post-image-one">
                  {details && details
                    .filter((item) => item.id === 17)
                    .map((data) => {
                      return (
                        <>
                          {
                            <div className="top-post-image1">
                              <NavLink to={`/${data.id}`} className={"home1 "} >
                                <img
                                  src={data.img}
                                  alt="not found"
                                  className={"top-post-card1"}
                                />
                              </NavLink>
                            </div>
                          }
                        </>
                      );
                    })}
                </div>
              </div>

              <div className="top-post-details-parent ">
                <h3 className="sub-title top-post-title1">Top Post</h3>
                <hr className="sub-heading-hr top-post-hr" />
                <div className="top-post-con">
                  <div className="top-post-one-data">

                    {details && details
                      .filter((item) => item.id === 18)
                      .map((data) => {

                        return (
                          <>
                            {

                              <NavLink to={`/${data.id}`} className={"home1 "} >
                                <img
                                  src={data.img}
                                  alt="not found"
                                  className={"top-post-card2"}
                                />
                                <div>
                                  <div className="top-post-data1">
                                    <div>
                                      {" "}
                                      <h3>{data.title}</h3>
                                      <h4>
                                        Travel{" "}
                                        <span className="travel-time">
                                          /August 21 2023
                                        </span>{" "}
                                      </h4>
                                    </div>
                                    <div>
                                      <span className="top-post-count">1</span>
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
                <hr className="top-post-divider top-post-divider2" />

                <div className="latest-one">
                  {details && details
                    .filter((item) => item.id === 19)
                    .map((data) => {
                      return (
                        <>
                          {

                            <NavLink to={`/${data.id}`} className={"home1 top-posrt-sub-con1 top-posrt-sub-con2"} >
                              <div>
                                <img
                                  src={data.img}
                                  alt="not found"
                                  className={"top-post-sub1-card1"}
                                />
                              </div>
                              <div>
                                <h5>{data.title}</h5>

                                <h6>
                                  Travel{" "}
                                  <span className="travel-time">/August 21 2023</span>{" "}
                                </h6>
                              </div>
                              <div>
                                <span className="top-post-count">2</span>{" "}
                              </div>
                            </NavLink>

                          }
                        </>
                      );
                    })}


                </div>
                <hr className="top-post-divider3" />
                <div className="latest-one top-post3">
                  {details && details
                    .filter((item) => item.id === 20)
                    .map((data) => {
                      return (
                        <>
                          {

                            <NavLink to={`/${data.id}`} className={"home1 top-posrt-sub-con1 top-posrt-sub-con2"} >
                              <div>
                                <img
                                  src={data.img}
                                  alt="not found"
                                  className={"top-post-sub1-card1"}
                                />
                              </div>
                              <div>
                                <h5>{data.title}</h5>

                                <h6>
                                  Travel{" "}
                                  <span className="travel-time">/August 21 2023</span>{" "}
                                </h6>
                              </div>
                              <div>
                                <span className="top-post-count">3</span>{" "}
                              </div>
                            </NavLink>

                          }
                        </>
                      );
                    })}


                </div>


              </div>


            </div>
            <div className="latest-story-details-parent">

              <h3 className="sub-title top-post-title1">Latest Stories</h3>
              <hr className="sub-heading-hr top-post-hr" />
              <hr className="latest-stories-divider" />
              <div className="the-latest-parent the-Stories-parent">
                <div className="latest-one story1">
                  {details && details
                    .filter((item) => item.id === 18)
                    .map((data) => {
                      return (
                        <>
                          {
                            <NavLink to={`/${data.id}`} className={"home1 "} >


                              <h3>{data.title}</h3>
                              <h5>{data.description.slice(0, 150)}...</h5>
                              <h4>
                                Travel{" "}
                                <span className="travel-time">/August 21 2023</span>{" "}
                              </h4>
                              <hr className="hrNone"></hr>
                            </NavLink>
                          }
                        </>
                      );
                    })}
                </div>
                <div className="latest-one story1 ">
                  {details && details
                    .filter((item) => item.id === 19)
                    .map((data) => {
                      return (
                        <>
                          {
                            <NavLink to={`/${data.id}`} className={"home1 "} >

                              {/* <br/> */}
                              <h3>{data.title}</h3>
                              <h5>{data.description.slice(0, 150)}...</h5>
                              <h4>
                                Travel{" "}
                                <span className="travel-time">/August 21 2023</span>{" "}
                              </h4>

                            </NavLink>

                          }
                        </>
                      );
                    })}
                </div>

                <div className="latest-one story1">

                  {details && details
                    .filter((item) => item.id === 22)
                    .map((data) => {
                      return (
                        <>
                          {
                            <NavLink to={`/${data.id}`} className={"home1 "} >

                              {/* <br/> */}
                              <h3>{data.title}</h3>
                              <h5>{data.description.slice(0, 150)}...</h5>
                              <h4>
                                Travel{" "}
                                <span className="travel-time">/August 21 2023</span>{" "}
                              </h4>
                            </NavLink>
                          }
                        </>
                      );
                    })}
                </div>
              </div>
              <hr className="latest-stories-divider latest-stories-divider-last" />
            </div>
          </div>
          <diV className="hFooter">
            <Footer />

          </diV>
        </Suspense>

      }


    </div>
  );
};

export default Home;
