import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  font-size: 16px;
  width: 250px;
  max-width: 300px;
  box-sizing: border-box;
  border: white;
`;

const Container = styled.div`
  text-align: center;
`;

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSearchChange(e.target.value)
        }
      />
    </Container>
  );
};

export default SearchBar;
