# sample-youtube

## Simple code sample for playing youtube videos in a modal 

Dev resources:
https://www.codecademy.com/en/tracks/youtube
https://developers.google.com/youtube/v3/quickstart/js

Simple youtube api integration that allows videos to be played as modals (Using an iframe to youtube)
Can be served by node or python

Python:

* start a default generic server

```
python3 -m http.server 8000
```

navigate to that file in a browser window
http://localhost:8000/youtube.html

Node:

* start up node server from the JS file:

```
node node-youtube.js
```

navigate to the file in a browser window
http://localhost:8000/youtube.html

Note:
The user needs to provide their own API client key to access Youtube's API
See https://goo.gl/PdPA1 to get a key for your own applications.

Enter your API key in the onYouTubeApiLoad function

The youtube channel defaults to Google Chrome Developers

TODO:

* add pagination to support more than 50 video responses
* add size responsiveness of the modal
