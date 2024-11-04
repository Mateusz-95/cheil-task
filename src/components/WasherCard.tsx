import React from "react";
import styled from "styled-components";
import Price from "./Price";

const Card = styled.div`
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 338px;
  text-align: center;
  background-color: #ffffff;
`;

const EnergyLabel = styled.div`
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  padding: 4px 30px;
  border-radius: 4px 0 0 4px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -10px;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-left: 10px solid #4caf50;
    border-bottom: 12px solid transparent;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 12px;
  border-radius: 4px;
`;

const ModelName = styled.h2`
  font-size: 18px;
  margin-bottom: 22px;
  color: #333;
`;

const Details = styled.p`
  font-size: 12px;
  color: #555;
  margin: 4px 0;
  text-align: start;
`;

const DetailsInfo = styled.span`
  color: black;
  font-weight: bold;
`;

const StyledButton = styled.button`
  background-color: #1429a0;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 20px 0;

  &:hover {
    background-color: #0056b3;
  }
`;

const Installments = styled.p`
  font-size: 0.9em;
  color: #555;
  margin: 4px 0;
  text-align: start;
  font-weight: bold;
`;

const ModelContainer = styled.div`
  text-align: start;
  max-width: 70%;
`;

interface WasherCardProps {
  model: string;
  capacity: string;
  amount: number;
  imageUrl: string;
  dimensions: string;
  functions: string[];
  energy: string;
}

const WasherCard: React.FC<WasherCardProps> = ({
  model,
  capacity,
  amount,
  imageUrl,
  dimensions,
  functions,
  energy,
}) => {
  return (
    <Card>
      <Image src={imageUrl} alt={model} />
      <ModelContainer>
        <ModelName>{model}</ModelName>
      </ModelContainer>
      <Details>
        Pojemność: <DetailsInfo>{capacity}</DetailsInfo>
      </Details>
      <Details>
        Wymiary: <DetailsInfo>{dimensions}</DetailsInfo>
      </Details>
      <Details>
        Funkcje: <DetailsInfo>{functions.join(", ")}</DetailsInfo>
      </Details>
      <Details style={{ margin: "20px 0 20px 0" }}>
        Klasa energetyczna <EnergyLabel>{energy}</EnergyLabel>
      </Details>
      <Details>Cena obowiązuje: 15.09.2022 - 21.09.2022</Details>
      <Price amount={amount} />
      <Installments>{`${(amount / 60).toFixed(2)} zł x 60 rat`}</Installments>
      <StyledButton>WYBIERZ</StyledButton>
    </Card>
  );
};

export default WasherCard;
