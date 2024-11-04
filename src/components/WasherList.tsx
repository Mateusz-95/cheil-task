import React from "react";
import styled from "styled-components";
import WasherCard from "./WasherCard";
import products from "../products.json";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

interface WasherListProps {
  searchTerm: string;
  sortBy: string;
  functionFilter: string;
  energyClass: string;
  capacityFilter: string;
}

const WasherList: React.FC<WasherListProps> = ({
  searchTerm,
  sortBy,
  functionFilter,
  energyClass,
  capacityFilter,
}) => {
  const filteredProducts = products
    .filter((washer) =>
      washer.model.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((washer) =>
      functionFilter === "wszystkie"
        ? true
        : washer.functions.includes(functionFilter)
    )
    .filter((washer) =>
      energyClass === "wszystkie" ? true : washer.energy === energyClass
    )
    .filter((washer) =>
      capacityFilter === "wszystkie" ? true : washer.capacity === capacityFilter
    );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === "cena") {
      return a.amount - b.amount;
    }
    if (sortBy === "pojemnosc") {
      return parseInt(a.capacity) - parseInt(b.capacity);
    }
    return 0;
  });

  return (
    <Wrapper>
      <Grid>
        {sortedProducts.map((washer, index) => (
          <WasherCard
            key={index}
            model={washer.model}
            capacity={washer.capacity}
            amount={washer.amount}
            imageUrl={washer.imageUrl}
            dimensions={washer.dimensions}
            functions={washer.functions}
            energy={washer.energy}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default WasherList;
