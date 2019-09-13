import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Viewport from './Viewport';
import Action from './Action';

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
    return (
        <main>
            <div className="wrapper">
                <Viewport />

                <Action rotation="deg255" label="Walk" />
                <Action rotation="deg240" label="Look" />
                <Action rotation="deg225" label="Use" />
                <Action rotation="deg210" />
                <Action rotation="deg195" />
                <Action rotation="deg180" />
            </div>
        </main>
    );
}

export default App;
