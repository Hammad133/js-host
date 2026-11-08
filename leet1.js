(function () {
    const results = {};

    // Check whether parent origin is accessible
    try {
        results.parentOrigin = window.parent.location.origin;
    } catch (e) {
        results.parentOrigin = "Blocked: " + e.name;
    }

    // Check whether parent storage can be accessed
    try {
        const storage = window.parent.localStorage;
        results.parentStorageAccess = "Accessible";
        results.parentStorageKeys = storage.length;
    } catch (e) {
        results.parentStorageAccess = "Blocked: " + e.name;
    }

    function display() {
        const output = document.createElement('pre');

        output.style.cssText =
            'background:#111;color:#00ff00;padding:20px;white-space:pre-wrap;';

        output.textContent = JSON.stringify(results, null, 2);

        document.documentElement.appendChild(output);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', display);
    } else {
        display();
    }
})();
