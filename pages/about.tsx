import * as React from "react";
import Image from "next/image";

export default function About(){
    return(
        <div className="main-background">
            <div className="aboutBackground">
                <div className="flex-item">
                        <h1 className="aboutContainer">ABOUT HARRISON PRINTING</h1>
                    <div className="main-photo" style={{width: '430px', height: '250px', position: 'relative'}}>
                        <Image className="about-pic" src="/about.png" layout='fill'/>
                    </div>
                    <div className="info-container">
                        <p>Harrison Printing and Promotions, which also
                            operates under the name Harrison Promotions,
                            is located in Kimberly, Wisconsin. This organization
                            primarily operates in the Color Printing: Gravure
                            business / industry within the Printing, Publishing
                            and Allied Industries sector. This Origination was
                            started by William Harrison and has been started in
                            2007. Harrison Printing and Promotions is estimated
                            to generate $248,770 in annual revenues, and employs
                            approximately 2 people at this single location. This
                            organization is engaged in manufacturing activities
                            at this facility.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}