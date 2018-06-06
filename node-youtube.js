const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 8000;

http
	.createServer(function(req, res) {
		const q = url.parse(req.url, true);
		const filename = `.${q.pathname}`;
		console.log(`Listening on localhost:${port}/youtube.html`);
		fs.readFile(filename, function(err, data) {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				return res.end('404 Not Found');
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	})
	.listen(port);
