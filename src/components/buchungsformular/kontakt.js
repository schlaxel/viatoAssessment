import React from 'react';
import styled from 'styled-components';
import { TextInput } from '../common';

const Wrapper = styled.div``;

const Row = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
`;

const Lable = styled.p`
    width: 150px;
`;

const Reiseplanung = ({ formData, onChangeData }) => {
    return (
        <Wrapper>
            <Row>
                <Lable>Vorname, Name</Lable>
                <TextInput
                    onChange={(e) => onChangeData('vorname', e.target.value)}
                />
                <TextInput
                    onChange={(e) => onChangeData('name', e.target.value)}
                />
            </Row>
            <Row>
                <Lable>Straße, Nr.</Lable>
                <TextInput
                    onChange={(e) => onChangeData('street', e.target.value)}
                />
                <TextInput
                    onChange={(e) => onChangeData('streetNr', e.target.value)}
                    small
                />
            </Row>
            <Row>
                <Lable>PLZ, Ort</Lable>
                <TextInput
                    onChange={(e) => onChangeData('plz', e.target.value)}
                    small
                />
                <TextInput
                    onChange={(e) => onChangeData('ort', e.target.value)}
                />
            </Row>
        </Wrapper>
    );
};

export default Reiseplanung;
