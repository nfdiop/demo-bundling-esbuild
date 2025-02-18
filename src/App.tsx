// File: src/App.tsx
import React from 'react';
import data from './data.json';
import { formatName } from './utils';
import { WEBSITE_NAME, WEBSITE_URL } from './constants';

const App: React.FC = () => {
    return (
        <div>
            <h2>Hello, {formatName(data.name)}!</h2>
            <p>Age: {data.age}</p>
            <p>Occupation: {data.occupation}</p>
            <footer>
                <a href={WEBSITE_URL}>{WEBSITE_NAME}</a>
            </footer>
        </div>
    );
};

export default App;
