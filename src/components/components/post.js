import React from 'react';
import Post from 'components/post';

const PostDemo = () => (
	<div
		className="
			Bg(lightl)
			Px(s1)
			Py(s-5)
		"
	>
		<Post
			title={
				<h2
					className="
						Fz(i)
						Fw(300)
					"
				>
					Sample Post
				</h2>
			}
		>
			<p>This is a sample excerpt.</p>
		</Post>
	</div>
);

export default PostDemo;
export const title = 'Post';
export const excerpt = "A piece of content's title and excertp.";
