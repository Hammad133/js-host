// Test 1: Listen for messages
window.addEventListener('message', function(event) {
    console.log('Message received!');
    console.log('Origin:', event.origin);
    console.log('Data:', event.data);
    console.log('Source:', event.source);
});

// Test 2: Inspect iframe relationships
console.log('Current origin:', location.origin);
console.log('Parent is top:', window.parent === window.top);

try {
    console.log('Parent URL:', window.parent.location.href);
} catch (e) {
    console.log('Parent URL blocked:', e.name);
}
