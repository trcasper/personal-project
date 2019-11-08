import React, {Component} from 'react';
import "./Contact.css";
import BandTwo from '../img/BandTwo.jpg';

class Contact extends Component {
    render() {
        return(
            <div className='Contact'>
                <div className="ContactBox">
                    <div className="InfoBox">
                        <div className="InfoTitle">Alpine Loop</div>
                        <div className="BandInfo">Band Members:<br/>Travis Casper - Lead Vocals / Rhythm Guitar<br/>Brian Casper - Bass / Backing Vocals<br/>Caleb McBride - Lead Guitar<br/>Logan Casper - Drums
                        </div>
                        <br/>
                        <div className="ContactInfo">Email: alpineloopband@gmail.com<br/>Text: 801-785-9387<br/><br/>Or message us on Facebook!</div>

                    </div>

                </div>
                <div className="BandPicTwo">
                    <img className="BandTwo" src={BandTwo} alt="BandPicTwo" />

                </div>
            </div>
        )
    }
}

export default Contact;