import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
    const [copyText, setCopyText] = useState("MDC@MDC-holding.COM");

    const handleCopyClick = () => {
        navigator.clipboard.writeText("mdc@mdc-holding.com").then(() => {
            setCopyText("Copied!");
            setTimeout(() => setCopyText("MDC@MDC-holding.COM"), 3000);
        }).catch(err => console.error('Failed to Copy: ' + err));
    }


    return (
        <div className="ContactForm">
            <form action="#">
                <div className="ContactForm-NameSection">
                    <div className="ContactForm-Box">
                        <label htmlFor="First Name">First Name:</label>
                        <input type="text" name="First Name" />
                    </div>
                    <div className="ContactForm-Box">
                        <label htmlFor="Last Name">Last Name:</label>
                        <input type="text" name="Last Name" />
                    </div>
                </div>
                <div className="ContactForm-EmailSection ContactForm-Box">
                    <label htmlFor="Company Name">E-Mail:</label>
                    <input type="text" name="Company Name" />
                </div>
                <div className="ContactForm-CompanySection ContactForm-Box">
                    <label htmlFor="Company Name">Company Name:</label>
                    <input type="text" name="Company Name" />
                </div>
                <div className="ContactForm-MessageSection ContactForm-Box">
                    <label htmlFor="Message">Message:</label>
                    <textarea name="Message" />
                </div>
                <div className="ContactForm-SubmitBtnContainer">
                    <button className="ContactForm-Submit" type="submit">Send</button>
                </div>
            </form>
            <div className="ContactForm-Information">
                <hr className='Stretchbar'/>
                <h2>Our Address</h2>
                <p>
                    One by Omniyat<br />
                    14th Floor<br />
                    Business Bay<br />
                    P.O. Box 97706<br />
                    Dubai, UAE<br />
                </p>
                <p className="ContactForm-Eamil" title="Copy" onClick={handleCopyClick}>{copyText}</p>
            </div>
        </div>
    )
}