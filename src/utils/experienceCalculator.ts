/**
 * Calculate years of experience since career start date
 * Career started: October 2017
 */
export const calculateYearsOfExperience = (): number => {
  const careerStartDate = new Date(2017, 9, 1);
  const currentDate = new Date();

  const yearsDiff = currentDate.getFullYear() - careerStartDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - careerStartDate.getMonth();

  const totalYears = yearsDiff + monthsDiff / 12;

  return Math.floor(totalYears);
};
