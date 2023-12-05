import styled, { keyframes } from 'styled-components';

const changeColor = keyframes`
  0% {
    color: #696ac2;
  }
  50% {
    color: #2b2d8c;
  }
  75%{
    color: #393a91;
  }
  100% {
    color: #0c38e8;
  }
`;

export const TrendingTitle = styled.h1`
  font-size: 35px;
  margin: 25px;
  text-align: center;
  animation: ${changeColor} 5s linear infinite;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 32px;
  text-align: center;
`;

export const LoadingMessage = styled.p`
  color: #888;
  font-size: 32px;
  text-align: center;
`;
