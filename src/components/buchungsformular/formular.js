import React from 'react';
import styled from 'styled-components';
import Navigation from './navigation';
import FormContent from './formContent';

const Wrapper = styled.div`
    padding: 30px;
    background: ${({ theme }) => theme.colors.bg2};
    flex: 1;
`;

const Formular = ({ formData, onChangeData, step }) => {
    return (
        <Wrapper>
            <Navigation step={step} />
            <FormContent
                formData={formData}
                step={step}
                onChangeData={onChangeData}
            />
        </Wrapper>
    );
};

export default Formular;
