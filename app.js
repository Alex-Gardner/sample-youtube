// Single page sample Youtube http request (codecademy)
// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// https://developers.google.com/youtube/v3/quickstart/js

/*  !!!!!!!!!!*********** To run this from your file servers
Open command prompt where this file is located (~/http-examples)
Python:
-start a python server
python3 -m http.server 8000
-load that server in a browser window
http://localhost:8000/youtube.html
Node:
- start up node server from the JS file:
node node-youtube.js
- navigate to the file in a browser window
http://localhost:8000/youtube.html
*/

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
	//console.log(response);
	var responseData = document.getElementById('response');
	// responseText is a representation of the API response for ease of viewing
	// (truncated for length)
	var responseText = document.getElementById('response-text');

	const videoList = response.items.filter(function(item) {
		return item.id.kind === 'youtube#video';
	});
	console.log(videoList);

	videoList.forEach(function(item) {
		var imgDiv = document.createElement('div');
		imgDiv.className = 'video-div';
		var img = document.createElement('img');
		img.className = 'thumb-image';
		img.src = item.snippet.thumbnails.medium.url;
		img.alt = item.snippet.title;

		var vidTitle = document.createElement('h3');
		vidTitle.className = 'videotitle';
		vidTitle.innerHTML += item.snippet.title;
		responseData.append(imgDiv);
		imgDiv.append(vidTitle);
		imgDiv.append(img);
		imgDiv.onclick = function vidModal() {
			var modal = document.getElementById('video-modal');
			var container = document.getElementById('video-container');
			modal.src = 'https://youtube.com/embed/' + item.id.videoId;
			//modal.style.display = 'flex';
			container.style.display = 'flex';
			//modal.style.opacity = 1.0;
			container.style.opacity = 1.0;
			//modal.className = 'modal-on';
			console.log(modal);
			window.onclick = function(e) {
				if (event.target == container) {
					container.style.display = 'none';
					modal.src = null;
					container = null;
				}
			};
		};
		// imgDiv.onclick = function vidModal() {
		// 	var modal = document.createElement('a');
		// 	modal.href = 'https://youtube.com/watch?v=' + item.id.videoId;
		// 	modal.text = 'Click This Now';
		// 	imgDiv.append(modal);
		// 	console.log(modal);
		// };
		//console.log(vidTitle);
	});

	//******* Creates an 'img' element in the DOM
	// accesses the element and adds an src attr
	// sets a variable for the target div (created already)
	// adds the created img element to the DOM in t)he targeted spots

	// -------
	var responseString = JSON.stringify(response, '', 2);
	responseText.innerHTML = responseString;
	/*var newModal = document.createElement('iframe');
newModal.src = 'youtube.com/watch?v=QC-cMv0e3Dc';
responseText.append(newModal);*/
}
// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
	// This API key is intended for use only in this lesson.
	// See https://goo.gl/PdPA1 to get a key for your own applications.

	//
	gapi.client.setApiKey(/*enter personal API key*/);

	search();
}

function search() {
	// Use the JavaScript client library to create a search.list() API call.
	var request = gapi.client.youtube.search.list({
		part: 'snippet',
		// Google Chrome Developers ChannelId:
		channelId: 'UCnUYZLuoy1rq1aVMwx4aTzw',
		maxResults: 20,
		order: 'date'
	});

	// Send the request to the API server,
	// and invoke onSearchRepsonse() with the response.
	request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
	showResponse(response);
}
