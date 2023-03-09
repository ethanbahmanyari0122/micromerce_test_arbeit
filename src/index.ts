type Dates = {
  startDate: string;
  endDate: string;
};

const extractDates = (customer: any) => {
  const extractedDates = []
  const period = customer.ListOfPeriods || "Undefined"

  if(period == "NULL" || period == "Undefined") {
    return extractedDates
  } else if (period.includes("|")) {
    const dates = period.split("|")
    for(let i = 0; i < dates.length; i++){
      const date = dates[i].split("-")
      if(!check(date[0].trim()) || !check(date[1].trim())){
        extractedDates.unshift("string length is invalid")
      }
      const newDates: Dates = {startDate: date[0].trim(), endDate: date[1].trim()}
      extractedDates.push(newDates);
    }
  } else{
    const date = period.split("-")
    if(!check(date[0].trim()) || !check(date[1].trim())){
      extractedDates.unshift("string length is invalid")
    }
    const newDates: Dates = {startDate: date[0].trim(), endDate: date[1].trim()}
    extractedDates.push(newDates);
  }
  return extractedDates;
}

const check = (date : string) => {
  return date.length == 10;
}

export default extractDates;
