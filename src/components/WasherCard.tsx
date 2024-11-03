import React from "react";
import styled from "styled-components";
import Price from "./Price";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const EnergyLabel = styled.div`
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 4px 0 0 4px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-left: 10px solid #4caf50;
    border-bottom: 16px solid transparent;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 12px;
  border-radius: 4px;
`;

const ModelName = styled.h2`
  font-size: 1.2em;
  margin-bottom: 8px;
  color: #333;
`;

const Details = styled.p`
  font-size: 0.9em;
  color: #555;
  margin: 4px 0;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Installments = styled.p`
  font-size: 0.9em;
  color: #555;
  margin: 4px 0;
`;

interface WasherCardProps {
  model: string;
  capacity: string;
  amount: number;
  imageUrl: string;
  dimensions: string;
  functions: string;
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
      <ModelName>{model}</ModelName>
      <Details>Pojemność: {capacity}</Details>
      <Details>Wymiary: {dimensions}</Details>
      <Details>Funkcje: {functions}</Details>
      <EnergyLabel>{energy}</EnergyLabel>
      <Details>Cena obowiązuje: 15.09.2022 - 21.09.2022</Details>
      <Price amount={amount} />
      <Installments>` ${amount / 60} zł x 60 rat `</Installments>
      <StyledButton>Wybierz</StyledButton>
    </Card>
  );
};

export default WasherCard;
