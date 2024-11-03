import React from "react";
import styled from "styled-components";

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 24px;
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
`;

const Currency = styled.span`
  font-size: 18px;
  margin-left: 4px;
  align-self: flex-end;
`;

interface PriceProps {
  amount: number;
}

const Price: React.FC<PriceProps> = ({ amount }) => {
  return (
    <PriceContainer>
      <MainPrice>{amount}</MainPrice>
      <Zero>00</Zero>
      <Currency>zł</Currency>
    </PriceContainer>
  );
};

export default Price;
