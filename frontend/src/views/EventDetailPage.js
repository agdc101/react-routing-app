import { json, useRouteLoaderData, redirect, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import EventItem  from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
    const { event, events } = useRouteLoaderData('event-detail');

    return (
      <>
      <Suspense fallback={ <p>Loading....</p> } >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} /> }
        </Await>
      </Suspense>

      <Suspense fallback={ <p>Loading....</p> } >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={ loadedEvents } /> }
        </Await>
      </Suspense>
      </>
    )
  }

export default EventDetailPage;

export async function loader ({ request, params }) {
  return defer({
      event: await loadEvent(params.eventId),
      events: fetchEvents()
  }); 
}

async function loadEvent(id) {
    const response = fetch(`http://localhost:8080/events/${params.eventId}`);

    if (!response.ok) {
      throw json({ message: "Could not delete event" }, { status: 500 });
    } else {
      const resData = await response.json();
      return resData.events;
    }

}

async function fetchEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Something went wrong!' }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function action({request, params}) {
  const response = fetch(`http://localhost:8080/events/${params.eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }

  return redirect('/events');
}

