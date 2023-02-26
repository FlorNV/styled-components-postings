import React from "react";
import styled, { css } from "styled-components";
import { RxCounterClockwiseClock } from "react-icons/rx";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { format } from "../utils/Format";
dayjs.extend(customParseFormat);

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  border-top: 4px solid
    ${({ color }) =>
      color === "SUPERHIGHLIGHTED"
        ? "#7b2cbf"
        : color === "HIGHLIGHTED"
        ? "#06d6a0"
        : "none"};
  font-size: 14px;
  position: relative;
`;

const Flex = styled.div`
  display: flex;
  ${({ isBottom }) =>
    isBottom &&
    css`
      align-items: center;
      justify-content: space-between;
    `};
`;

const Left = styled.div`
  width: 35%;
`;

const Right = styled.div`
  width: 65%;
  padding: 0 14px;
`;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
`;

const Plan = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  text-shadow: 0 0 8px #000;
`;

const Prices = styled.div`
  border-right: 1px solid #ddd;
  margin: 8px 0 8px 16px;
`;

const Price = styled.div`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #00b8f2;
  margin: 10px 0;
`;

const Location = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

const Description = styled.p`
  margin-top: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #888;
`;

const Box = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;

  span {
    margin-left: 5px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #f77f00;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
`;

const Posting = ({ posting }) => {
  const {
    posting_id,
    posting_location,
    posting_prices,
    operation_type,
    publication_plan,
    publish_date,
    posting_status,
    title,
    posting_picture,
    posting_slug,
    posting_description,
  } = posting;
  const { address, zone, city } = posting_location;
  const { price, expenses } = posting_prices[0];

  const formattedPrice = format(price);
  const formattedExpenses = expenses ? format(expenses) : null;

  const publishDate = dayjs(publish_date, "DD/MM/YYYY");
  const diff = dayjs().diff(publishDate, "day");

  return (
    <Card color={publication_plan}>
      <Flex>
        <Left>
          <Image src={posting_picture} />
          <Plan>
            {publication_plan === "SUPERHIGHLIGHTED"
              ? "Super Destacado"
              : publication_plan === "HIGHLIGHTED"
              ? "Destacado"
              : "Simple"}
          </Plan>
        </Left>
        <Right>
          <Title>{title}</Title>
          <Location>
            {address}, {zone}, {city}
          </Location>
          <Description>{posting_description}</Description>
        </Right>
      </Flex>
      <Flex isBottom>
        <Left>
          <Prices>
            <Price>{formattedPrice}</Price>
            {expenses && <div>+ {formattedExpenses} Expensas</div>}
          </Prices>
        </Left>
        <Right>
          <Flex isBottom>
            <Box>
              <RxCounterClockwiseClock />
              <span>Publicado hace {diff} días</span>
            </Box>
            <Button>Contactar</Button>
          </Flex>
        </Right>
      </Flex>
    </Card>
  );
};

export default Posting;
