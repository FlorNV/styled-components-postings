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

const Checkbox = styled.input`
  margin: 0;
  margin-right: 10px;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid #aaa;
  border-radius: 4px;
  display: flex;
  justify-content: center;

  &:checked {
    background-color: #f77f00;
    border-color: #f77f00;
  }

  &:checked::before {
    content: "";
    width: 5px;
    height: 10px;
    background-color: #f77f00;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(40deg);
    -ms-transform: rotate(40deg);
    transform: rotate(40deg);
  }
`;

const FavoritesFilter = () => {
  const { setPostings } = useContext(PostingsContext);
  const [show, setShow] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const postingsStored = JSON.parse(localStorage.getItem("favorites"));
    setPostings(checked ? postingsStored : postingsList);
  }, [checked, setPostings]);

  return (
    <Container height={show && "80px"}>
      <Title onClick={() => setShow(!show)}>
        <span>Otros filtros</span>
        <Image src={arrow} isToggled={show} />
      </Title>
      <DropdownMenu>
        <Label>
          <Checkbox
            type="checkbox"
            name="favorites"
            value={checked}
            checked={checked}
            onChange={handleChange}
          />
          Favoritos
        </Label>
      </DropdownMenu>
    </Container>
  );
};

export default FavoritesFilter;
