import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { PostingsContext } from "../contexts/PostingsContext";
import { postings as postingsList } from "../mockedPostings";
import arrow from "../assets/down_arrow.svg";
import {
  Container,
  Title,
  DropdownMenu,
  Image,
} from "./styled/Dropdown.styled";

const Label = styled.label`
  font-size: 14px;
  display: block;
  margin-top: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioButton = styled.input`
  margin: 0;
  margin-right: 10px;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  border: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;

  &:checked {
    border-color: #f77f00;
  }

  &:checked::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #f77f00;
    border-radius: 50px;
  }
`;

const OperationFilter = () => {
  const { setPostings } = useContext(PostingsContext);
  const [show, setShow] = useState(true);
  const [operation, setOperation] = useState("");

  const handleChange = (e) => {
    setOperation(e.target.value);
  };

  useEffect(() => {
    const list = operation
      ? postingsList.filter(
          (posting) => posting.operation_type.operation_type_id == operation
        )
      : postingsList;
    setPostings(list);
  }, [operation, setPostings]);

  return (
    <Container height={show && "180px"}>
      <Title onClick={() => setShow(!show)}>
        <span>Tipo de operación</span>
        <Image src={arrow} isToggled={show} />
      </Title>
      <DropdownMenu>
        <Label>
          <RadioButton
            type="radio"
            name="operation"
            value="1"
            checked={operation === "1"}
            onChange={handleChange}
          />
          Alquiler
        </Label>
        <Label>
          <RadioButton
            type="radio"
            name="operation"
            value="2"
            checked={operation === "2"}
            onChange={handleChange}
          />
          Compra/venta
        </Label>
        <Label>
          <RadioButton
            type="radio"
            name="operation"
            value="3"
            checked={operation === "3"}
            onChange={handleChange}
          />
          Alquiler temporal
        </Label>
        <Label>
          <RadioButton
            type="radio"
            name="operation"
            value=""
            checked={operation === ""}
            onChange={handleChange}
          />
          Todos
        </Label>
      </DropdownMenu>
    </Container>
  );
};

export default OperationFilter;
