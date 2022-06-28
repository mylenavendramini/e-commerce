import styled from "styled-components";

export const SuggestionContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 0px;
  z-index: 5;
  overflow: scroll;
  max-height: 80vh;
  width: 340px;
  /* transition: all 0.5s ease-in-out; */

  & :not(span) {
    margin: 4px 0px 0px 8px;
  }
`;

export const InputContainer = styled.span`
  margin: 0px;
  display: flex;
  align-items: center;

  input {
    border: none;
    outline: none;
    font-size: 15px;
    width: 290px;
    height: 30px;

    &::-webkit-input-placeholder {
      padding: 0px;
    }
    &:focus::-webkit-input-placeholder {
      margin-top: 10px;
      visibility: hidden;
    }

    &:focus {
      border-bottom: 1.5px solid lightgray;
    }
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 50%;
    height: auto;
  }

  span {
    margin-left: -40px;
  }
`;

export const ItemDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.span`
  font-size: 18px;
  color: var(--black-primary);
  margin-top: -20px;
`;

export const Price = styled.span`
  font-size: 16px;
  margin-top: -80px;
  color: var(--black-secondary);
`;
