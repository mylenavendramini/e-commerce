import styled from "styled-components";

export const DirectoryContainerMain = styled.div`
  width: 100%;
  display: grid;
  padding: 10px 0 50px 0;
  grid-template-columns: 1fr;
  row-gap: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Body = styled.div`
  /* height: 80px; */
  padding: 15px 10px;
  display: flex;
  bottom: 100px;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;
  justify-self: center;
  /* margin-bottom: 100px; */
  position: absolute;
`;
