import React from 'react';
import Browser from 'components/browser';
import IndexTitle from 'components/index-title';

const Library = ({ components }) => {
	const paths = components.map(edge => ({
		file: edge.node.path.replace(/\/experiments\/component-library/, '.'),
		url: edge.node.path,
	}));
	return (
		<ul
			className="
				List(n)
				Pstart(0)
				My(0)
			"
		>
			{paths.map(({ file, url }) => {
				const filename = /\.\/([\w-]*)/.exec(file)[1];
				const name = filename.replace('-', ' ');
				const {
					default: Component,
					title,
					excerpt,
				} = require(`./${filename}.js`);

				return (
					<li key={file} id={filename} className="Mb(s4)">
						<div
							className="
								C(dark)
							"
						>
							<div
								className="
									Mb(s1)
								"
								id={filename}
							>
								<IndexTitle>
									<h2
										className="
											Fz(s1)
											Fw(300)
										"
									>
										{title}
									</h2>
								</IndexTitle>
							</div>
							<div>
								<p className="My(0) Mb(s1)">{excerpt}</p>
								<Browser title={`Components / ${title}`} url={filename}>
									<Component />
								</Browser>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default Library;
