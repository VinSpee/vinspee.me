import React from 'react';
import Link from 'gatsby-link';
import Logo from 'components/vinspee-logo.svg';

const HomeHeader = () => (
  <div>
    <h1
      className="
        Fw(400)
        D(b)
        Px(s5)
        My(0)
        Mx(4px)
        Pt(s1)
        W(75%)
        Maw(31rem)
      "
    >
      <Link
        to="/"
        className="
          C(dark)
          C(light):h
          Trs(colorFade)
          D(b)
        "
        aria-label="Home"
      >
        <Logo />
        <span className="Hidden">
          Home
        </span>
      </Link>
    </h1>
  </div>
);

export default HomeHeader;
