import React from "react";
import styled from "styled-components";

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 24px;
  margin: 0 0 10px 0;
`;

const MainPrice = styled.span`
  font-size: 36px;
  font-weight: bold;
  margin-right: 4px;
`;

const Zero = styled.span`
  font-size: 18px;
  align-self: flex-start;
  font-weight: normal;
  font-weight: bold;
`;

const Currency = styled.span`
  font-size: 18px;
  margin-left: 4px;
  align-self: flex-end;
  font-weight: bold;
`;

const CurrencyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface PriceProps {
  amount: number;
}

const Price: React.FC<PriceProps> = ({ amount }) => {
  return (
    <PriceContainer>
      <MainPrice>{amount}</MainPrice>
      <CurrencyContainer>
        <Zero>00</Zero>
        <Currency>zł</Currency>
      </CurrencyContainer>
    </PriceContainer>
  );
};

export default Price;
