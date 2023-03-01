import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { PostingsContext } from "../contexts/PostingsContext";
import { postings as postingsList } from "../mockedPostings";
import arrow from "../assets/down_arrow.svg";
import {
  Container,
  Title,
  DropdownMenu,
  Image,
} from "./styled/Dropdown.styled";

const Input = styled.input`
  flex-grow: 1;
  margin-right: 4px;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 0 4px 1px rgba(221, 221, 221, 0.5);
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 8px 10px;
  border: 1px solid #ddd;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 0 0 4px 1px rgba(221, 221, 221, 0.5);
  color: #219ebc;
  cursor: pointer;
`;

const AddressFilter = () => {
  const { setPostings } = useContext(PostingsContext);
  const [show, setShow] = useState(true);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    const list =
      query !== ""
        ? postingsList.filter((posting) => {
            const { address, city, zone } = posting.posting_location;
            const location = [address, city, zone].join(",");
            return location.toLowerCase().includes(query.toLowerCase());
          })
        : postingsList;
    setPostings(list);
  };

  useEffect(() => {
    if (query === "") {
      setPostings(postingsList);
    }
  }, [query]);

  return (
    <Container height={show && "110px"}>
      <Title onClick={() => setShow(!show)}>
        <span>Dirección</span>
        <Image src={arrow} isToggled={show} />
      </Title>
      <DropdownMenu display={"flex"}>
        <Input
          name="query"
          value={query}
          placeholder="Buscar por dirección"
          onChange={handleChange}
        />
        <Button onClick={handleClick}>
          <BsSearch />
        </Button>
      </DropdownMenu>
    </Container>
  );
};

export default AddressFilter;
