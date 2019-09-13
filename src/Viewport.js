import React, { useState } from 'react';

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

export default function Viewport(props) {
    const [clickSpot, setClickSpot] = useState('');
    const handleClick = (event) => {
        const offsetX = event.nativeEvent.layerX;
        const offsetY = event.nativeEvent.layerY;
        const viewpoint = { x: 0, y: 0 };
        const zoom = 1;
        const radius = 7;
        const areaSize = event.currentTarget.clientWidth / (radius * 2); //32;
        console.log(areaSize);
        const viewportSize = event.currentTarget.clientWidth; //areaSize * ((radius * 2) + 1);
        console.log(event.currentTarget.clientWidth);
        console.log(event.currentTarget.clientHeight);
        const { x, y } = viewportCoordsToLocation(viewpoint, offsetX, offsetY, areaSize, zoom, viewportSize);
        setClickSpot(`${x} ${y}`);
    };

    return <div className="viewport" onClick={handleClick}>

        I am a viewport. {clickSpot}
    </div>
}