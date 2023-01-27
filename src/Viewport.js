import React, { useState } from 'react';
import classNames from 'classnames';

function viewportCoordsToLocation(viewpoint, left, top, areaSize, zoom, viewportSize) {
    const zoomedAreaSize = areaSize * zoom;
    // Frame center is the coordinate offset from the edge of the frame. i.e., if the frame shows 13 tiles, this would be 7. (so a radius of 6)
    const frameCenterX = Math.floor(viewportSize / 2 / zoomedAreaSize);
    const frameCenterY = Math.floor(viewportSize / 2 / zoomedAreaSize);
    // The difference between the center and where the viewpoint currently is.
    const offsetX = viewpoint.x - frameCenterX;
    const offsetY = viewpoint.y - frameCenterY;
    // Use the offset to then determine the coordinate of the clicked pixel (left/top).
    const x = Math.floor((left / zoomedAreaSize)) + offsetX;
    const y = Math.floor((top / zoomedAreaSize)) + offsetY;

    return {
        x,
        y,
    };
}

export default function Viewport({ minimized }) {
    const handleClick = (event) => {
        const offsetX = event.nativeEvent.layerX;
        const offsetY = event.nativeEvent.layerY;
        const viewpoint = { x: 0, y: 0 };
        const zoom = 1;
        const radius = 7;
        const areaSize = event.currentTarget.clientWidth / (radius * 2); //32;
        const viewportSize = event.currentTarget.clientWidth; //areaSize * ((radius * 2) + 1);
        const { x, y } = viewportCoordsToLocation(viewpoint, offsetX, offsetY, areaSize, zoom, viewportSize);
        console.log(`${x} ${y}`);
    };

    const viewportClass = classNames('viewport', {
        minimized,
    });

    return (
        <div className={viewportClass} onClick={handleClick}>
            <div className="region-wrapper"></div>
        </div>
    );
}