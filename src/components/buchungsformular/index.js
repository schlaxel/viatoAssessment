import React, { useState } from 'react';
import styled from 'styled-components';
import Formular from './formular';
import Warenkorb from './warenkorb';

const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.bg3};
    padding: 20px 20px 40px 20px;
    display: flex;
`;

const Index = () => {
    const initObj = { anreise: '', abreise: '', erwachsene: 1, kinder: 0 };
    const [formData, setFormData] = useState(initObj);
    const [step, setStep] = useState(0);

    const onChangeData = (key, value) => {
        const obj = formData;
        obj[key] = value;
        setFormData({ ...obj });
    };

    return (
        <Wrapper>
            <Formular
                formData={formData}
                onChangeData={onChangeData}
                step={step}
                setStep={setStep}
            />
            <Warenkorb step={step} setStep={setStep} formData={formData} />
        </Wrapper>
    );
};

export default Index;
