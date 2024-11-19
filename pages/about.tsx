import * as React from "react";
import Image from "next/image";

export default function About(){
    return(
        <div className="main-background">
            <div className="aboutBackground">
                <div className="flex-item">
                    <div className="main-photo" style={{width: '430px', height: '250px', position: 'relative'}}>
                        <Image className="about-pic" src="/IMG_0240.JPG" layout='fill'/>
                    </div>
                        <h1 className="aboutContainer">About us</h1>
                    <div className="info-container">
                       <div className="info-container">
                            <p>Harrison Printing and Promotions has been your trusted partner for high-quality promotional products, screen printing, paper goods, and embroidery since 2007. Founded by William Harrison, we have built a reputation for exceptional craftsmanship and personalized service.</p>
                            <br />
                            <p>From eye-catching custom apparel to branded promotional items, we’re here to help you bring your ideas to life and make a lasting impression. Whether you’re looking for uniforms, event swag, or business essentials, we ensure every product reflects your brand’s identity with precision and style.</p>
                            <br />
                            <p>At Harrison Printing and Promotions, we’re more than just a printing company—we’re your partner in making your vision a reality. Let’s create something amazing together!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
