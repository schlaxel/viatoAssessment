import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Elem = styled.div`
    padding: 10px 0;
`;

const Label = styled.p`
    font-weight: 500;
    padding: 5px 0;
`;

const Content = styled.p`
    font-weight: 300;
`;

const RoomDetail = styled.div`
    display: flex;
    margin-top: 7px;
    justify-content: space-between;
`;

const Preis = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-end;
`;

const WarenkorbContent = ({ formData, step }) => {
    const renderReisezeitraum = () => {
        if (formData.anreise === '' || formData.abreise === '') {
            return 'Wählen Sie einen Reisezeitraum';
        }

        return `${formData.anreise} - ${formData.abreise}`;
    };

    const renderRoom = () => {
        if (typeof formData.room === 'undefined') {
            return <Content>Bitte wählen Sie ein Zimmer!</Content>;
        }

        return (
            <>
                <Content>{formData.room.room.name}</Content>
                <RoomDetail>
                    <Content>{formData.room.optionName}</Content>
                    <Content>{formData.room.price / 100},00 €</Content>
                </RoomDetail>
            </>
        );
    };

    const renderAddress = () => {
        return (
            <>
                <Content>
                    {formData.vorname} {formData.name}
                </Content>
                <Content>
                    {formData.street} {formData.streetNr}
                </Content>
                <Content>
                    {formData.plz} {formData.ort}
                </Content>
            </>
        );
    };

    return (
        <Wrapper>
            <Elem>
                <Label>Reisezeitraum</Label>
                <Content>{renderReisezeitraum()}</Content>
            </Elem>
            <Elem>
                <Label>Gästeanzahl</Label>
                <Content>
                    {formData.erwachsene > 0 &&
                        `Erwachsene: ${formData.erwachsene}`}
                    {formData.kinder > 0 && `Kinder: ${formData.kinder}`}
                </Content>
            </Elem>
            {step > 0 && (
                <Elem>
                    <Label>Gewünschte Zimmer</Label>
                    {renderRoom()}
                </Elem>
            )}
            {step > 1 && (
                <Elem>
                    <Label>Rechnungsadresse</Label>
                    {renderAddress()}
                </Elem>
            )}
            {step > 1 && (
                <Preis>
                    <Label>Gesamtpreis</Label>
                    <Label>{formData.room.price / 100},00 €</Label>
                </Preis>
            )}
        </Wrapper>
    );
};

export default WarenkorbContent;
