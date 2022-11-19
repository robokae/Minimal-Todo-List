const ErrorPage = () => {
  return (
    <div className="error">
      <div className="error__content">
        <h2 className="error__heading">Error</h2>
        <p className="error__message">
          Looks like you went to a page that does not exist.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
