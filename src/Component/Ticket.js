import React, { useState } from "react";
import styled from 'styled-components';
import TicketList from "./TicketList";

const Container = styled.div`
  background: #36393e;
  display: flex;
  flex-flow: column wrap; // 2
  width: 30%;
  height: 600px;
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
  width: 90%;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: column; // 5 
  justify-content: center;
  align-items: center;
`;

function Ticket() {
  const [tickets, setTickets] = useState([]);

  const handleNewTicket = (event) => {
    event.preventDefault();
    const newTicket = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      priority: event.target.priority.value,
    };
    setTickets([...tickets, newTicket]);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleNewTicket}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" />

        <label htmlFor="status">Status:</label>
        <select id="status" name="status">
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          <option value="Closed">Closed</option>
        </select>

        <label htmlFor="priority">Priority:</label>
        <select id="priority" name="priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <ul>
        <Container>
          <List>
              {tickets.map((ticket, index) => <Card>
                <h2>{ticket.title}</h2>
                <p>{ticket.description}</p>
                <p>Status: {ticket.status}</p>
                <p>Priority: {ticket.priority}</p>
                </Card>)}
          </List>
        </Container>
      </ul>
    </div>
  );
}

export default Ticket;


