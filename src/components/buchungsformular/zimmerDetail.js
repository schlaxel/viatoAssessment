import React from 'react';
import styled from 'styled-components';
import { Button } from '../common';

const Wrapper = styled.section``;

const Label = styled.h1`
    font-size: 1.3em;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-weight: 400;
    padding: 10px 10px 10px 0;
`;

const Option = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: solid 1px ${({ theme }) => theme.colors.grey};
    margin: 5px;
`;

const OptionContent = styled.div`
    padding: 10px 30px 10px 10px;
    display: flex;
    justify-content: space-between;
    flex: 1;
`;

const P = styled.p``;

const ZimmerDetail = ({ room, rates, onClick, roomKey, formData }) => {
    const renderOptions = () => {
        const data = [];

        room.rates.forEach((rate) => {
            const optionName = rates[rate].name;
            const price = rates[rate].price;
            data.push(
                <Option>
                    <OptionContent>
                        <P>{optionName}</P>
                        <P>{price / 100},00 €</P>
                    </OptionContent>
                    <Button
                        grey={!checkIfActive(rate)}
                        onClick={() =>
                            onClick({ optionName, price, room, roomKey, rate })
                        }
                    >
                        wählen
                    </Button>
                </Option>
            );
        });

        return data;
    };

    // check if the room AND option is selected
    const checkIfActive = (rate) => {
        // If there is no room selected (undefined) return false.
        if (typeof formData.room === 'undefined') return false;

        // if the rate and roomkey matches the selected rate and roomkey
        // return true
        if (rate === formData.room.rate && formData.room.roomKey === roomKey) {
            return true;
        }

        return false;
    };

    return (
        <Wrapper>
            <Label>{room.name}</Label>
            {renderOptions()}
        </Wrapper>
    );
};

export default ZimmerDetail;
