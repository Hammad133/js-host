window.addEventListener('message', function(event) {
    console.log('Message received!');
    console.log('Origin:', event.origin);
    console.log('Data:', event.data);
    console.log('Source:', event.source);
});
