import React from "react";
import styled from "styled-components";
import AddressFilter from "./AddressFilter";
import FavoritesFilter from "./FavoritesFilter";
import OperationFilter from "./OperationFilter";

const Container = styled.div`
  padding: 10px 14px 0 14px;
  border-radius: 8px;
  background-color: #fff;
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  box-shadow: 0 0 8px 2px #ccc;
`;

const Filters = () => {
  return (
    <Container>
      <h2>Filtrado actual</h2>
      <AddressFilter />
      <OperationFilter />
      <FavoritesFilter />
    </Container>
  );
};

export default Filters;
