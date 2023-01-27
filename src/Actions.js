import React from 'react';

import Action from './Action';

export default function Actions({ viewMode, clickHandler }) {
    let degs = "deg195";

    switch (viewMode) {
        case 'viewport':
            break;
        case 'sheet':
            degs = "deg60";
        default:

    }
    return (
        <>
            <Action key="walk" className="deg255 delay0" label="Walk" clickHandler={clickHandler} />
            <Action key="look" className="deg240 delay02" label="Look" clickHandler={clickHandler} />
            <Action key="use" className="deg225 delay04" label="Use" clickHandler={clickHandler} />
            <Action key="attack" className="deg210 delay06" label="Attack" clickHandler={clickHandler} />
            <Action key="viewMode" className={`${degs} delay08`} label="Sheet" clickHandler={clickHandler} />
            <Action key="exit" className="deg45 delay10" label="Exit" clickHandler={clickHandler} />
        </>
    )
}