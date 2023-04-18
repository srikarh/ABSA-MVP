import React, { useState } from "react";

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
        {tickets.map((ticket, index) => (
          <li key={index}>
            <h2>{ticket.title}</h2>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
            <p>Priority: {ticket.priority}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ticket;


