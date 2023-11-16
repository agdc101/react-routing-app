import MainNavigation from "../components/MainNavigation.js";
import PageContent from "../components/PageContent.js";
import { useRouteError } from "react-router-dom";

function Error () {
  const error = useRouteError();
  
  if (error.status === 404) {
    return (
      <>
        <MainNavigation/>
        <PageContent title="Not Found">
          <p>Page not found.</p>
        </PageContent>
      </>
    )
  }

  if (error.status === 500) {
    return (
      <>
        <MainNavigation/>
        <PageContent title="Error">
          <p>Something went wrong.</p>
        </PageContent>
      </>
    )
  }

}

export default Error;