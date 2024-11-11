import * as React from "react";
import Image from "next/image";

export default function About(){
    return(
        <div className="main-background">
            <div className="aboutBackground">
                <div className="flex-item">
                        <h1 className="aboutContainer">ABOUT HARRISON PRINTING</h1>
                    <div className="main-photo" style={{width: '430px', height: '250px', position: 'relative'}}>
                        <Image className="about-pic" src="/IMG_0240.JPG" layout='fill'/>
                    </div>
                    <div className="info-container">
                        <p>Since 2007, Harrison Printing, a family owned company, provided quality services and products.
                        We try our hardest to meet the customers needs and can guarantee speedy delivery.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
