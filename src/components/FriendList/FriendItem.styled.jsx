import styled from '@emotion/styled';
import { getRandomHex } from 'components/statistics/Statistics';

export const Friend = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100px;
  justifu-content: center;
  background-color: #fff;
  border-radius: 5%;
`;

export const Avatar = styled.img`
display: block;
margin: 0 auto;
width: 60px;
background-color: ${getRandomHex};
border-radius: 50%`



export const Status = styled.span`
  display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: auto;
  ${({ online }) => {
    if (online === true) {
      return 'background-color: green;';
    } else if (online === false) {
      return 'background-color: red;';
    } else {
      return 'background-color: grey;';
    }
  }}
`;

export const Nickname = styled.p`
display: block;
text-align: center;
`
