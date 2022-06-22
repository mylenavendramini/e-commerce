import styled from "styled-components";

export const ShoppingContainer = styled.div`
  width: 22px;
  height: 24px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 42px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  visibility: visible;

  hidden {
    visibility: hidden;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 11px;
  font-weight: bold;
  bottom: 12px;
`;
