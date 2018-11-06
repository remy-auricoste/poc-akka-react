let sseStream;
if (typeof window !== 'undefined' && window && window.EventSource) {
  sseStream = new window.EventSource('http://localhost:9000/events');
}

module.exports = sseStream;
