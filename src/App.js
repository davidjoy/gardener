import React, { useState } from 'react';
import './App.scss';
import Viewport from './Viewport';
import Actions from './Actions';

function App() {
    const [viewMode, setViewMode] = useState('viewport');

    const handleSheetClick = () => {
        console.log('wut');
        setViewMode(viewMode === 'viewport' ? 'sheet' : 'viewport');
    }

    const viewModeLabel = viewMode === 'viewport' ? 'Sheet' : 'Region';

    return (
        <main>
            <div className="wrapper">
                <Viewport minimized={viewMode === 'sheet'} />
                <Actions viewMode={viewMode} clickHandler={handleSheetClick} />
            </div>
        </main>
    );
}

export default App;
