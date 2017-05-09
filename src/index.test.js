import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import {shallow} from 'enzyme'; // Needs react-test-renderer
import cookie from 'react-cookie';

import CookieBanner from './index';

const COOKIE_NAME_IS_HIDDEN = "banner_cookie_hidden";

describe('<CookieBanner />', () => {

    beforeEach(() => {
        // Reset the cookie before each test so we represent newopen page
        cookie.setRawCookie('');
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CookieBanner />, div);
    });

    it('Should be shown on load', () => {
        const cb = shallow(<CookieBanner/>);
        expect(cb.state().hideBanner).to.equal(false);

    });

    it('Should be hidden after click', () => {
        const cb = shallow(<CookieBanner/>);
        const button = cb.find('.CookieButton a');
        button.simulate("click");
        expect(cb.state().hideBanner).to.equal(true);

    });

    it('Should store a cookie to be hidden when closed', () => {
        const cb = shallow(<CookieBanner />);
        const button = cb.find('.CookieButton a');
        button.simulate("click");
        const bannerHidden = cookie.load(COOKIE_NAME_IS_HIDDEN);
        expect(bannerHidden).to.equal(true);

    });

    it('Should set state to hidden if cookie is set to hidden', () => {
        cookie.save(COOKIE_NAME_IS_HIDDEN, true);
        const cb = shallow(<CookieBanner />);
        expect(cb.state().hideBanner).to.equal(true);

    });

    it('Should render null when cookie to hide is stored', () => {
        cookie.save(COOKIE_NAME_IS_HIDDEN, true);
        const cb = shallow(<CookieBanner />);
        expect(cb.isEmptyRender()).to.equal(true);

    });
});
