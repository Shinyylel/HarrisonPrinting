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
                                <a className="contactLinks" href="mailto:harrison.printing@yahoo.com">harrison.printing@yahoo.com</a>
                            </dd>
                        </dl>
                        <div>
                            <iframe width="600" height="600"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=558%20Eisenhower%20Dr%20Ste%20A+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/distance-area-calculator.html"></a></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}