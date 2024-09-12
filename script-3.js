const month = "november";
switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(
      `january , march , may, july , august , october and december have 31 days`
    );
    break;
  case "february":
    console.log(`february have 28 and 29 days in leap year`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`april, june, september and november have 30 days`);
    break;
  default:
    break;
}
