import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px 0 0 0;
  justify-content: center;
`;

export const Title = styled(Link)`
  font-size: 28px;
  /* margin-bottom: 25px; */
  cursor: pointer;
  padding: 20px;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }

  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }
`;
