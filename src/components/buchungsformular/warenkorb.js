import React from 'react';
import styled from 'styled-components';
import WarenkorbContent from './warenkorbContent';
import { Button } from '../common';

const Wrapper = styled.div`
    padding: 20px;
    background: ${({ theme }) => theme.colors.bg1};
    width: 240px;
    min-height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Header = styled.p`
    border-bottom: solid 2px ${({ theme }) => theme.colors.primary};
    display: inline-block;
    padding: 0 0 5px 0;
    align-self: flex-start;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Spacer = styled.div`
    flex: 1;
`;

const Warenkorb = ({ formData, step, setStep }) => {
    // check if Button should be disabled
    const checkButtonDisabled = () => {
        // if we are after step 0 and room is undefined disabled button
        if (step > 0 && typeof formData.room === 'undefined') return true;

        // if we are at step 2 AND everything in address is undefined disable
        // (Could be optimized later)
        if (step > 1 && isFieldMissing()) {
            return true;
        }
        return false;
    };

    // check if one field is missing in Kontaktdaten
    const isFieldMissing = () => {
        if (
            typeof formData.vorname === 'undefined' ||
            typeof formData.name === 'undefined' ||
            typeof formData.street === 'undefined' ||
            typeof formData.streetNr === 'undefined' ||
            typeof formData.plz === 'undefined' ||
            typeof formData.ort === 'undefined'
        )
            return true;

        return false;
    };

    // render 'zurück' button based on step
    const renderPrevButton = () => {
        if (step > 0) {
            return (
                <Button onClick={() => setStep(step - 1)} light>
                    Zurück
                </Button>
            );
        }

        return <Spacer />;
    };

    return (
        <Wrapper>
            <Header>Ihre Auswahl</Header>
            <WarenkorbContent step={step} formData={formData} />
            <ButtonWrapper>
                {renderPrevButton()}
                <Button
                    onClick={() => setStep(step + 1)}
                    disabled={checkButtonDisabled()}
                >
                    {step < 2 ? 'Weiter' : 'Jetzt buchen'}
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

export default Warenkorb;
