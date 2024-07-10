import { faClock, faSquare, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendar,
  faCheckSquare,
  faChevronDown,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faFileAlt,
  faList,
  faPlus,
  faSearch,
  faTasks,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const faSolidIcons = [
  faCheckSquare,
  faTrash,
  faEllipsisH,
  faTimes,
  faPlus,
  faSearch,
  faChevronDown,
  faFileAlt,
  faCalendar,
  faList,
  faTasks,
  faExclamationCircle,
  faExclamationTriangle,
];

const faRegularIcons = [faStar, faSquare, faClock];

const faIcons = [...faSolidIcons, ...faRegularIcons];

export default faIcons;
