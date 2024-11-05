import React from "react";
import styled from "styled-components";

const Para = styled.p`
  font-weight: lighter;
`;

const ResultsContainer = styled.div`
  width: 80%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

interface NumberOfResultsProps {
  products: Object;
}

const NumberOfResults: React.FC<NumberOfResultsProps> = ({ products }) => {
  return (
    <Container>
      <ResultsContainer>
        <Para>Liczba wyników: {Object.keys(products).length}</Para>
      </ResultsContainer>
    </Container>
  );
};

export default NumberOfResults;
