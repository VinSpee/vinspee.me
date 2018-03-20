import React from 'react';
import IndexTitle from 'components/index-title';

const Post = ({
  title,
  children,
}) => (
  <div>
    <header
      className="
        Mb(s1)
      "
    >
      <IndexTitle>
        {title}
      </IndexTitle>
    </header>
    <div
      className="
        My(0)
      "
    >
      {children}
    </div>
  </div>
);

export default Post;
