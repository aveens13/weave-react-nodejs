// Dummy data for contributions

export const generateDummyData = () => {
  const data = {};
  const startDate = new Date(2024, 0, 1);
  const endDate = new Date(2024, 11, 31);

  while (startDate <= endDate) {
    const dateString = startDate.toISOString().split("T")[0];
    data[dateString] = Math.floor(Math.random() * 5); // Random contributions (0-4)
    startDate.setDate(startDate.getDate() + 1);
  }

  return data;
};
  
  const dummyData = generateDummyData();
  