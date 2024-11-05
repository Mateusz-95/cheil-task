import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Filters from "./components/Filters";
import Header from "./components/Header";
import NumberOfResults from "./components/NumberOfResults";
import SearchBar from "./components/SearchingBar";
import WasherList from "./components/WasherList";
import productsData from "./products.json";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("wszystkie");
  const [functionFilter, setFunctionFilter] = useState("wszystkie");
  const [energyClass, setEnergyClass] = useState("wszystkie");
  const [capacityFilter, setCapacityFilter] = useState("wszystkie");

  return (
    <Container>
      <Header />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Filters
        sortBy={sortBy}
        functionFilter={functionFilter}
        energyClass={energyClass}
        capacityFilter={capacityFilter}
        onSortByChange={setSortBy}
        onFunctionFilterChange={setFunctionFilter}
        onEnergyClassChange={setEnergyClass}
        onCapacityFilterChange={setCapacityFilter}
      />
      <NumberOfResults products={productsData} />
      <WasherList
        searchTerm={searchTerm}
        sortBy={sortBy}
        functionFilter={functionFilter}
        energyClass={energyClass}
        capacityFilter={capacityFilter}
      />
    </Container>
  );
};

export default App;
