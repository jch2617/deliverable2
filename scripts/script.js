function myFunction() {
    var result;
    var eventType = prompt("Is it a casual, semi-formal, or formal event?");
    switch(eventType) {
      case "casual":
        result = "something comfy";
        break;
      case "semi-formal":
        result = "a polo";
        break;
      case "formal":
        result = "a suit";
        break;
      default:
        result = "Invalid response";
        break;
    }
    var degrees;
    var tempFahr = prompt("What is the temperature in Farenheit?");
    if(tempFahr < 53) {
        degrees = "a coat.";
    } else if (tempFahr > 54 || tempFahr < 70) {
        degrees = "a jacket."
    } else if (tempFahr > 71) {
        degrees = "no jacket."
    } else {
    degrees = "Invalid response";
    }
    document.getElementById("whattowear").innerHTML = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${result} and ${degrees}`;
    }
    
    