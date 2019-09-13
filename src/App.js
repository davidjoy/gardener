import React from 'react';
import './App.scss';
import Viewport from './Viewport';
import Action from './Action';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
    return (
        <main>
            <div className="wrapper">
                <Viewport />
                <Action rotation="deg255" delay="0s" label="Walk" />
                <Action rotation="deg240" delay="0.2s" label="Look" />
                <Action rotation="deg225" delay="0.4s" label="Use" />
                <Action rotation="deg210" delay="0.6s" label="Attack" />
                <Action rotation="deg195" delay="0.8s" label="Sheet" />
                <Action rotation="deg45" delay="1s" label="Exit" />
            </div>
        </main>
    );
}

export default App;
