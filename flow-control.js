
function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!";
  }
}


function teenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!";
} else {
  return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!";
} else if (age < 13) {
  return "You are a kid";
} else {
  return "You are a grownup";
  }
}

//If the age is 12 or below, it should return "You are a kid". If the age is above 19, it should return "You are a grownup"



//function ternaryTeenager(age) {
//  if (age >= 13 && age <= 19) {
//    return "You are a teenager"
//}
//    return "You are not a teenager"
//  }   ...this is still correct but ternary is below.


  function ternaryTeenager(age){
    return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
  }

  function switchAge(age){
  switch (age)  {
    case (age = 13):
    case (age = 14):
    case (age = 15):
    case (age = 16):
    case (age = 17):
    case (age = 18):
    case (age = 19):
    return ("You are a teenager");
      break;
    default:
    return ("You have an age");
  }
}
