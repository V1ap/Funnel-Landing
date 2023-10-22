export const phoneFormatter = (telNumb: string) => {
  let result = "+7";
  telNumb[1] ? (result += `(${telNumb[1]}`) : (result += "(_");
  telNumb[2] ? (result += telNumb[2]) : (result += "_");
  telNumb[3] ? (result += telNumb[3]) : (result += "_");
  telNumb[4] ? (result += `)${telNumb[4]}`) : (result += ")_");
  telNumb[5] ? (result += telNumb[5]) : (result += "_");
  telNumb[6] ? (result += telNumb[6]) : (result += "_");
  telNumb[7] ? (result += `-${telNumb[7]}`) : (result += "-_");
  telNumb[8] ? (result += telNumb[8]) : (result += "_");
  telNumb[9] ? (result += `-${telNumb[9]}`) : (result += "-_");
  telNumb[10] ? (result += telNumb[10]) : (result += "_");

  return result;
};
