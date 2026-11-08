(async function () {
    const results = {};

    // Current iframe origin
    results.iframeOrigin = location.origin;

    // Current iframe localStorage
    try {
        results.iframeStorage = Object.fromEntries(
            Object.keys(localStorage).map(key => [
                key,
                localStorage.getItem(key)
            ])
        );
    } catch (e) {
        results.iframeStorageError = e.toString();
    }

    // Parent application origin
    try {
        results.parentOrigin = window.parent.location.origin;
    } catch (e) {
        results.parentOriginError = e.toString();
    }

    // Parent application localStorage
    try {
        results.parentStorage = Object.fromEntries(
            Object.keys(window.parent.localStorage).map(key => [
                key,
                window.parent.localStorage.getItem(key)
            ])
        );
    } catch (e) {
        results.parentStorageError = e.toString();
    }

    // Display results
    const output = document.createElement('pre');
    output.style.cssText =
        'background:#111;color:#0f0;padding:20px;white-space:pre-wrap;';

    output.textContent = JSON.stringify(results, null, 2);
    document.body.appendChild(output);
})();
