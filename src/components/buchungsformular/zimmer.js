import React from 'react';
import styled from 'styled-components';
import ZimmerDetail from './zimmerDetail';

import roomData from '../../available_rooms.json';

const Wrapper = styled.div``;

const Reiseplanung = ({ formData, onChangeData }) => {
    const onClickOption = (options) => {
        onChangeData('room', options);
    };

    const renderRooms = () => {
        const data = [];
        Object.keys(roomData.rooms).forEach((roomKey) => {
            data.push(
                <ZimmerDetail
                    room={roomData.rooms[roomKey]}
                    roomKey={roomKey}
                    rates={roomData.rates}
                    onClick={(options) => onClickOption(options)}
                    formData={formData}
                />
            );
        });
        return data;
    };

    return <Wrapper>{renderRooms()}</Wrapper>;
};

export default Reiseplanung;
