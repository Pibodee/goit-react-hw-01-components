// import PropTypes from 'prop-types';
import { Item, Label,Percentage, Container, List, Title } from './Statistics.styled';


export const Statistics = ({stats}) =>{ 

    const Items = ({ data }) =>{
        return data.map(({ id, label, percentage }) => {
            return (
              <Item key={id}>
                <Label >{label}</Label>
                <Percentage>{percentage}%</Percentage>
              </Item>
            );
     })
    }
    return <Container>
        <Title >Upload Stats</Title>
        <List >
            <Items data={stats} />
        </List>
    </Container>
}


export function getRandomHex() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}