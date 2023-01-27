import React, { useEffect } from 'react';
import classNames from 'classnames';

export default function Action({ className, label, clickHandler }) {
    const classes = classNames('action', className);

    useEffect(() => {
        return () => {
            console.log('unmount!');
        }
    })
    return (
        <button key={label}
            className={classes}
            onClick={clickHandler}
        >
            {label}
        </button>
    )
}