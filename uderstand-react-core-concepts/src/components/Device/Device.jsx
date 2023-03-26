import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    
    return (
        <div>
            <h3>I have a device..: {props.name}</h3>
            <DeviceDetails></DeviceDetails>
        </div>
    );
};

export default Device;