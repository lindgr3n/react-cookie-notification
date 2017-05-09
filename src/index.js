import React, { Component } from 'react';
import cookie from 'react-cookie';
import './index.css';

const COOKIE_NAME = "banner_cookie_hidden";

class CookieBanner extends Component {
    constructor(props) {
        super(props);
        const cookieHidden = cookie.load(COOKIE_NAME);
        this.state = { hideBanner: !!cookieHidden };
    }

    closeBanner() {
        this.setState({hideBanner: true});
        cookie.save(COOKIE_NAME, true);
    }

    render() {
        if(this.state.hideBanner) {
            return null;
        }
        return (
            <div className="CookieBanner">
                <div className="CookieContent">
                This website uses cookies to ensure you get the best experience on our website.
                <a aria-label="learn more about cookies" tabIndex="0" href="http://cookiesandyou.com" target="_blank">Learn more</a>
                </div>
                <div className="CookieButton">
                    <a aria-label="dismiss cookie message" onClick={this.closeBanner.bind(this)} role="button" tabIndex="0" >Got it!</a>
                </div>

            </div>
        );
    }
}

export default CookieBanner;
