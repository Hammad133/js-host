document.body.innerHTML = '';

const output = document.createElement('pre');

output.style.cssText = `
    background: #111;
    color: #00ff00;
    padding: 20px;
    font-size: 16px;
    white-space: pre-wrap;
`;

output.textContent = JSON.stringify(
    Object.fromEntries(
        Object.keys(localStorage).map(key => [
            key,
            localStorage.getItem(key)
        ])
    ),
    null,
    2
);

document.body.appendChild(output);
