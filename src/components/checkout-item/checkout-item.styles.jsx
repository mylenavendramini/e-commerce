import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid lightgray;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  /* width: 23%; */
  width: 12%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  display: flex;
  justify-content: space-around;
`;

export const Quantity = styled(BaseSpan)`
  border: 1px solid lightgrey;
  padding: 10px;
`;

export const Arrow = styled.div`
  cursor: pointer;
  padding: 10px;
`;

export const Value = styled.span`
  /* margin: 0 10px; */
  padding: 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 30px;
  cursor: pointer;
`;
