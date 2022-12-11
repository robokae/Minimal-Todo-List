const getTimeOfDay = () => {
  const hour = new Date().getHours();

  if (hour >= 0 && hour < 12) {
    return "Morning";
  } else if (hour >= 12 && hour < 18) {
    return "Afternoon";
  } else {
    return "Evening";
  }
};

export default getTimeOfDay;
