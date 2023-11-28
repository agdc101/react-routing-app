import { Link } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.event.image} alt={event.event.title} />
      <h1>{event.event.title}</h1>
      <time>{event.event.date}</time>
      <p>{event.event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
