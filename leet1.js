function showPopup() {
    alert('Homework Lab Done!');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showPopup);
} else {
    showPopup();
}
