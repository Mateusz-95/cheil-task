import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectTitle = styled.p`
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Select = styled.select`
  padding: 8px;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
`;

interface FiltersProps {
  sortBy: string;
  functionFilter: string;
  energyClass: string;
  capacityFilter: string;
  onSortByChange: (value: string) => void;
  onFunctionFilterChange: (value: string) => void;
  onEnergyClassChange: (value: string) => void;
  onCapacityFilterChange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  sortBy,
  functionFilter,
  energyClass,
  capacityFilter,
  onSortByChange,
  onFunctionFilterChange,
  onEnergyClassChange,
  onCapacityFilterChange,
}) => {
  return (
    <Container>
      <FiltersContainer>
        <SmallContainer>
          <SelectTitle>Sortuj po:</SelectTitle>
          <Select
            value={sortBy}
            onChange={(e: { target: { value: string } }) =>
              onSortByChange(e.target.value)
            }
          >
            <option value="wszystkie">Popularność</option>
            <option value="cena">Cena</option>
            <option value="pojemnosc">Pojemność</option>
          </Select>
        </SmallContainer>

        <SmallContainer>
          <SelectTitle>Funkcje:</SelectTitle>
          <Select
            value={functionFilter}
            onChange={(e: { target: { value: string } }) =>
              onFunctionFilterChange(e.target.value)
            }
          >
            <option value="wszystkie">Pokaż wszystkie</option>
            <option value="Drzwi AddWash™">Drzwi AddWash</option>
            <option value="Panel AI Control">Panel AI Control</option>
            <option value="Silnik inwerterowy">Silnik Inwerterowy</option>
            <option value="Wyświetlacz elektroniczny">
              Wyświetlacz elektroniczny
            </option>
          </Select>
        </SmallContainer>

        <SmallContainer>
          <SelectTitle>Klasa energetyczna:</SelectTitle>
          <Select
            value={energyClass}
            onChange={(e: { target: { value: string } }) =>
              onEnergyClassChange(e.target.value)
            }
          >
            <option value="wszystkie">Pokaż wszystkie</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="D">D</option>
          </Select>
        </SmallContainer>

        <SmallContainer>
          <SelectTitle>Pojemność:</SelectTitle>
          <Select
            value={capacityFilter}
            onChange={(e: { target: { value: string } }) =>
              onCapacityFilterChange(e.target.value)
            }
          >
            <option value="wszystkie">Pokaż wszystkie</option>
            <option value="9">9kg</option>
            <option value="8">8kg</option>
            <option value="10,5">10,5kg</option>
          </Select>
        </SmallContainer>
      </FiltersContainer>
    </Container>
  );
};

export default Filters;
