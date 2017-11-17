import React from 'react';

export default ({
  children,
  title,
  url,
}) => (
  <div
    className="
      Bdtw(s-6)
      Bdtc(lightd)
      Bdts(s)
      Ov(h)
      P(s-6)
      Bg(light)
    "
  >
    <div
      className="
        Bg(light)
        Pr(s1)
        Pb(s1)
        Pt(s-4)
        D(f)
        Ai(c)
        Jc(sb)
        Pos(r)
      "
    >
      <input
        className="
          D(ib)
          Bg(lightl)
          Flxg(1)
          Px(s-6)
          Bdc(lightd)
          Bds(s)
          H(s1)
          Py(s-6)
          Lh(2.5)
          Ov(v)
          Fz(s-1)
          C(lightdd)
          Ff(mono)
          Fs(i)
        "
        value={title}
      />
      <div
        className="
          Ai(c)
          Jc(c)
          Pstart(s1)
        "
      >
        <a
          href={`#${url}`}
          className="
            D(b)
            Bg(lightd)
            H(s2)
            W(s2)
            Bdrs(s2)
            Ff(mono)
            Fz(s-2)
            C(lightdd)
            Ta(c)
            Va(m)
            Lh(1.7)
            Fs(i)
          "
        >#</a>
      </div>
    </div>
    <div
      className="
        Ov(a)
      "
    >
      {children}
    </div>
  </div>
);
