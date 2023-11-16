import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const fetchedEvents = data.events;

  return <EventsList events={fetchedEvents} />
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Error('Something went wrong!');
    throw new Response(JSON.stringify({ message: 'Something went wrong!' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    return response;
  }
}