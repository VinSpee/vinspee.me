import React from 'react';

const PageTitle = ({ children }) => (
  <div
    className="
      Px(s5)
      Pb(s5)
      Bgc(r)
      BdB
      Bdbw(s-6)
      Bdbc(rd)
      Mx(release)
      Pt(s2)
    "
  >
    <span
      className="
        D(b)
        Fz(s5)
        Fz(s6)--sm
        Fz(s7)--md
        Fw(400)
        Lh(1.4)
        C(light)
        Ff(mono)
        My(0)
        Maw(53rem)
      "
    >
      {children}
    </span>
  </div>
);

export default PageTitle;
