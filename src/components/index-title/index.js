import React from 'react';

const IndexTitle = ({ children }) => (
  <span
    className="
      Bdb(s-6)
      Bdbc(light)
      Bdbs(s)
      C(dark)
      D(ib)
      Mstart(ns-6)
      Px(s-6)
      Td(n)
      Tt(u)
      Trs(allColorFade)
      C(red):h
      Bdbc(lightd):h
    "
  >
    <span
      className="
        D(ib)
        T(0)
        Fz(s1)
        Fw(700)
        Ff(mono)
        Mb(0)
      "
    >
      <span
        className="
          Td(n)
        "
      >
        {children}
      </span>
    </span>
  </span>
);

export default IndexTitle;
