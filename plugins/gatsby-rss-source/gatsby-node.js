import parser from 'rss-parser';

function promisifiedParseURL(url) {
	return new Promise(resolve => {
		parser.parseURL(url, resolve);
	});
}

// TODO: actually process
const processDatum = () => {};

export default async function sourceNodes({ actions }, { rssURL }) {
	const { createNode } = actions;
	const data = await promisifiedParseURL(rssURL);

	// Process data into nodes.
	data.forEach(datum => createNode(processDatum(datum)));
}
