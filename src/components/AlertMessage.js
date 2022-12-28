import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../config/alertConfig";

const AlertMessage = ({ type, message }) => {
  return (
    <div className={`alert-message alert-message--${type}`}>
      <FontAwesomeIcon icon={["fas", `${getIcon(type)}`]} />
      <p>{message}</p>
    </div>
  );
};

export default AlertMessage;
