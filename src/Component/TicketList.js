import styled from 'styled-components';
import React from 'react';
import Progressbar from './Progress_bar';

const Container = styled.div`
  background: #36393e;
  display: flex;
  flex-flow: column wrap; // 2
  width: 100%;
  height: 600px;
  margin: 5%;
  border-radius: 20px;
  overflow: auto;
`;
const List = styled.div`
  display: flex;
  justify-content: center; // 3
  flex-flow: row wrap; // 4
`;

const Card = styled.div`
  margin: 20px;
  background: #fff;
  height: 400px;
  width: 400px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: column; // 5 
  justify-content: center;
  align-items: center;
`;

const ticketNums = [0, 1, 2, 3, 5, 6, 7, 8, 9];
const ticketVals = ['0', '30', '60', '30', '90', '60', '30', '60', '90', '0'];
const ind = 0;

function TicketList() {
  return (
    <div class="row">
        <div class="column1">
            <Container>
                <List>
                    {ticketNums.map(item => <Card onClick={ticketClick}>{item}</Card>)}
                </List>
            </Container>
        </div>
        <div class="column2">
          <Progressbar bgcolor="orange" progress={ticketVals[ind]} height={30} /> 
          <Progressbar bgcolor="red" progress='60' height={30}/> 
          <Progressbar bgcolor="#99ff66" progress='50' height={30}/>
        </div>
    </div>
  );
}

function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function ticketClick() {
    ind = randomNumberInRange(0, ticketVals.length);
}

export default TicketList;