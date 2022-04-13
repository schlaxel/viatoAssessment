import React from 'react';
import styled from 'styled-components';
import { FormRow, InputIcon, TextInput } from '../common';

const Wrapper = styled.div``;

const P = styled.p`
    padding: 10px;
`;

const Label = styled.h2`
    color: ${({ theme }) => theme.colors.grey};
    margin: 20px 0 0 0;
`;

const Reiseplanung = ({ formData, onChangeData }) => {
    return (
        <Wrapper>
            <Label>Reisezeitraum</Label>
            <FormRow>
                <InputIcon
                    placeholder="tt.mm.jjjjj"
                    onChange={(e) => onChangeData('anreise', e.target.value)}
                    value={formData.anreise}
                />
                <P>bis</P>
                <InputIcon
                    placeholder="tt.mm.jjjjj"
                    onChange={(e) => onChangeData('abreise', e.target.value)}
                    value={formData.abreise}
                />
            </FormRow>
            <Label>Gästeanzahl</Label>
            <FormRow>
                <TextInput
                    small
                    label="Erwachsene"
                    value={formData.erwachsene}
                    onChange={(e) => onChangeData('erwachsene', e.target.value)}
                />
                <TextInput
                    small
                    label="Kinder"
                    value={formData.kinder}
                    onChange={(e) => onChangeData('kinder', e.target.value)}
                />
            </FormRow>
        </Wrapper>
    );
};

export default Reiseplanung;
