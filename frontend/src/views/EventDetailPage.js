import { useParams } from "react-router-dom";

function EventDetailPage() {
    const params = useParams();

    return (
      <div>
        <h1>The New Event Detail Page</h1>
        <p>{params.eventId}</p>
      </div>
    )
  }

export default EventDetailPage;