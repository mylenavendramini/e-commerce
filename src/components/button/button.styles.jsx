import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  background-color: var(--black-primary);
  color: white;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--black-secondary);
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: var(--yellow-primary);
  color: white;

  &:hover {
    background-color: var(--yellow-secondary);
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: var(--black-secondary);
  opacity: 0.7;
  color: white;
  border: 1px solid black;
  font-size: 13px;
  font-weight: bold;

  &:hover {
    background-color: var(--black-primary);
    opacity: 1;
    color: white;
    border: none;
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
