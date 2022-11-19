import { useRouteError } from "react-router-dom";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page-container">
      <div className="error-page-content">
        <h1 className="error-heading">Error</h1>
        <p className="error-message">
          Looks like you went to a page that does not exist.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
