import type { NextPage } from 'next'
import * as React from 'react';
import Link from 'next/link';
import Image from "next/image";


const Home: NextPage = () => {

  return (
      <div>
        <div className="fullBackground">
          <div className="middleText">
            <img className="main-logo" src="https://i.imgur.com/lHEefJp.png" alt="Harrison Printing"/>
          </div>
          <div className="middleButton">
            <button className="contactButton">
              <Link href='./contact'>Contact Us!</Link>
            </button>
          </div>
        </div>

        <div className="flex-container">
          <div className="item">
            <h1 className="box-1-title">
              OUR PRODUCTS
            </h1>
            <h1 className="box-1-text">
              In addition to printing, we provide an extensive line of silk-screened and embroidered apparel and promotional products. We marry your thoughts with our expertise to create a product that stands out in the market.
            </h1>
          </div>
          <div className="item">
            <h1 className="box-2-title">
              ABOUT US
            </h1>
            <h1 className="box-2-text">
              Since 2007, Harrison Printing a family owned company, has provided quality services and products.
              We try our hardest to meet out customers needs and can guarantee speedy delivery.
            </h1>
          </div>
          <div className="item">
            <h1 className="box-3-title">
              OUR MISSON
            </h1>
            <h1 className="box-3-text">
              We provide your needs with quick and easy service, taking your ideas and bringing them to life. We strive to make our customers satisfied and happy with each
              order they place.
            </h1>
          </div>
        </div>

        <div className="business-container">
          <div>
            <h1 className="hours"><Image className="hours" src="/hours.png" height="25" width="25"/>HOURS OF OPERATION</h1>
            <h1 className="hours">Monday - Friday</h1>
            <h1 className="hours">9AM - 5PM</h1>

            <button className="learnButton">
              <Link href='./services'>Learn More</Link>
            </button>
          </div>
        </div>


      </div>
  )
}

export default Home
