Summary
===

This a small project showing how akka-stream and akka-http can be used
to build a reactive app.
Server Sent Event (SSE) is used. 

Note that not all browsers support this technology.
See [this link](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#EventSource)
for compatibility matrix.

Requires :
* nodejs
* npm

how to install
===

`npm install`

how to run
===

Start dev environment :
`npm start`

It should start a web server serving assets on port `3000`

Testing
===

This project is meant to be used with backend project [poc-akka](https://github.com/remy-auricoste/poc-akka)

Fill in a min and a max number. Server will respond with a stream of numbers 
displaying on the right side of the page. 

The stream is using [SSE technology](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events).  

