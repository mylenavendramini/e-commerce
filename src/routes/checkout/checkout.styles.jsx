import styled from "styled-components";

export const CheckoutContainer = styled.div`
  /* width: 55%; */
  width: 90%;
  /* min-height: 90vh; */
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  /* width: 23%; */
  width: 22%;

  &:first-child {
    width: 35%;
  }

  &:last-child {
    width: 26%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
