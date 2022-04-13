import React from 'react';
import styled from 'styled-components';
import Reiseplanung from './reiseplanung';
import Zimmer from './zimmer';
import Kontakt from './kontakt';

const Wrapper = styled.div``;

const FormContent = ({ formData, onChangeData, step }) => {
    return (
        <Wrapper>
            {step === 0 && (
                <Reiseplanung formData={formData} onChangeData={onChangeData} />
            )}
            {step === 1 && (
                <Zimmer formData={formData} onChangeData={onChangeData} />
            )}
            {step === 2 && (
                <Kontakt formData={formData} onChangeData={onChangeData} />
            )}
        </Wrapper>
    );
};

export default FormContent;
