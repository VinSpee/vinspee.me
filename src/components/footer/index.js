import React from 'react';
import { Link } from 'gatsby';
import map from 'ramda/src/map';
import addI from 'ramda/src/addIndex';
import Mark from '../vinspee-mark.svg';

const mapWithI = addI(map);

const FooterLink = ({ children, to, ...rest }) => (
  <Link
    to={to}
    className="
      D(ib)
      C(darkll)
      C(dark):h
      Trs(colorFade)
      Td(n)
      Td(u):h
      Py(s-2)
    "
    activeClassName="
      C(r)!
      C(rd)!:h
    "
    {...rest}
  >
    {children}
  </Link>
);

const Footer = () => {
  const items = [
    {
      to: '/',
      label: 'home',
      children: (
        <div
          className="
            W(s3)
            Lh(1)
            Mt(3px)
          "
        >
          <Mark id="main-mark" />
          <span id="footer-home-label" className="Hidden">
            Home
          </span>
        </div>
      ),
    },
    {
      to: '/writing',
      children: 'writing',
      label: 'writing',
    },
    {
      to: '/experiments',
      children: 'experiments',
      label: 'experiments',
    },
    {
      to: '/contact',
      children: 'contact',
    },
  ];
  return (
    <div
      className="
        Bgc(light)
        Px(s1)
      "
    >
      <div
        className="
          Fw(700)
          List(n)
          Pstart(0)
          Tt(u)
          Fz(s-1)
          D(f)
          Jc(sb)
          Fld(c)
          Fld(r)!--xs
          Ai(c)
          C(lightd)
        "
      >
        {mapWithI((item, i) => [
          <div key={item.to}>
            <FooterLink to={item.to} exact={item.exact} aria-label={item.label}>
              {item.children}
            </FooterLink>
          </div>,
          i !== items.length - 1 && (
            <span
              role="presentation"
              key={`spacer-${item.label}`}
              className="D(n) D(b)--xs"
            >
              {' '}
              •
              {' '}
            </span>
          ),
        ])(items)}
      </div>
    </div>
  );
};

export default Footer;
