import { json, useLoaderData } from "react-router-dom";
import EventItem  from "../components/EventItem";

function EventDetailPage() {
    const data = useLoaderData();

    return (
      <EventItem event={data.event } />
    )
  }

export default EventDetailPage;

export const loader = async ({ params }) => {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`);

  if (!response.ok) {
    throw json({ message: "Something went wrong in event details!" }, { status: 500 });
  }

  const event = await response.json();
  return { event };
}