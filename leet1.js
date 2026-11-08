try {
    const value = window.parent.localStorage.getItem('@@auth0spajs@@::mokSq15WcUdaSihkaaCalwrlrWEp5j1f::workbench.ciam-us-prod.api.verily.com::openid profile email');
    document.body.textContent = value ?? 'Entry not found';
} catch (error) {
    document.body.textContent =
        'Storage access blocked: ' + error.name;
}
