try {
    const value = window.parent.localStorage.getItem('flag_key');
    document.body.textContent = value ?? 'Entry not found';
} catch (error) {
    document.body.textContent =
        'Storage access blocked: ' + error.name;
}
