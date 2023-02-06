import Link from 'next/link'

export default function Contact(){
    return(
        <div className="main-background">
            <h2 className="main-header">CONTACT INFORMATION</h2>
            <div className="contactBox">
                <div className="side-box">
                    <div className="whole-box">
                        <dl className="main-dl">
                            <dt className="first-grid">Address:</dt>
                            <dd className="second-grid">558 Eisenhower Dr Ste A</dd>
                            <dt className="first-grid">City:</dt>
                            <dd className="second-grid">Kimberly</dd>
                            <dt className="first-grid">State:</dt>
                            <dd className="second-grid">Wisconsin</dd>
                            <dt className="first-grid">Business Hours:</dt>
                            <dd className="second-grid">Monday-Friday: 8AM - 5PM</dd>
                            <dt className="first-grid">Zip Code:</dt>
                            <dd className="second-grid">54136-2145</dd>
                            <dt className="first-grid">Phone:</dt>
                            <dd className="second-grid">
                                <a className="contactLinks" href="tel:920-997-9940">920-997-9940 </a>
                            </dd>
                            <dt className="first-grid">Fax:</dt>
                            <a className="contactLinks" href="tel:920-997-9940">920-997-9945 </a>
                            <dt className="first-grid">Email:</dt>
                            <dd className="second-grid">
                                <a className="contactLinks" href="mailto:orders@harrsionprinting.net">orders@harrsionprinting.net</a>
                            </dd>
                        </dl>
                        <div>
                            <iframe width="600" height="600"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.2878725941064!2d-88.34991964834825!3d44.26289687900248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8803b0466fe3e88b%3A0xd58232ddbc8297ac!2sHarrison%20Printing%20%26%20Promotions!5e0!3m2!1sen!2sus!4v1675710272285!5m2!1sen!2sus;output=embed">
                                <a href="https://www.maps.ie/distance-area-calculator.html"></a></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
