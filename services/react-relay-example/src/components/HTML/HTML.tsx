import React, { FunctionComponent } from 'react';

export const HTML: FunctionComponent = ({ children }) => {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
            </head>
            <body>
                <span id="root">{children}</span>
                <script src="/assets/index.js" />
            </body>
        </html>
    );
};
