import React, { FunctionComponent } from 'react';

export const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <h1>Index page</h1>
            <ul>
                <li>
                    <a href="/users">List of users</a>
                </li>
            </ul>
        </div>
    );
};
