type Options = {
    html: string;
    relayRecords?: string;
};

export const renderHtml = ({ html, relayRecords }: Options) => {
    return `<!doctype HTML>
        <html>
            <head>
                <meta charset="utf-8" />
                <link id="favicon" rel="icon" type="image/x-icon" href="/favicon.svg" />
                <title>React relay example</title>
                ${relayRecords && renderJSON('relayRecords', relayRecords)}
            </head>
            <body>
                <span id="root">${html}</span>
                ${renderScriptSrc('/assets/index.js')}
            </body>
        </html>
    `;
};

const renderJSON = (id: string, data: string) => {
    return `<script id="${id}" type="text/json">${data}</script>`;
};

const renderScriptSrc = (src: string) => {
    return `<script src="${src}"></script>`;
};
