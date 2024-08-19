function src(typeofCard) {
  let src = "";
  switch (typeofCard) {
    case 1:
      src = "./src/assets/img/heart.png";
      break;
    case 2:
      src = "./src/assets/img/clubs.png";
      break;
    case 3:
      src = "./src/assets/img/rombo.png";
      break;
    case 4:
      src = "./src/assets/img/picas.png";
      break;
    default:
      src = "./src/assets/img/white.png";
      break;
  }
  return src;
}
function viewCardNumber(cardNumber) {
  let number = "";
  if (cardNumber == 1) number = "A";
  else if (cardNumber > 1 && cardNumber < 10) number = cardNumber;
  else if (cardNumber == 10) number = "J";
  else if (cardNumber == 11) number = "Q";
  else number = "K";
  return number;
}
function createHeadFooter(cardNumber, typeofCard) {
  let idtextcolor = "";
  typeofCard % 2 == 0 ? (idtextcolor = "blackfont") : (idtextcolor = "redfont");
  return (
    "<div class='row'><div class='col-12'><b id='" +
    idtextcolor +
    "'>" +
    viewCardNumber(cardNumber) +
    "</b></div></div><div class='row'><div class='col-2'><img class='img-fluid w-100 h-auto p-0 m-0' src='" +
    src(typeofCard) +
    "'/></div></div>"
  );
}

function createBody(cardNumber, typeofCard) {
  let result = "";
  if (cardNumber > 1 && cardNumber < 10) {
    let activeposition = {
      "2": [false, true, false, false, false, false, false, true, false],
      "3": [false, true, false, false, true, false, false, true, false],
      "4": [true, false, true, false, false, false, true, false, true],
      "5": [true, false, true, false, true, false, true, false, true],
      "6": [true, false, true, true, false, true, true, false, true],
      "7": [true, false, true, true, true, true, true, false, true],
      "8": [true, true, true, true, false, true, true, true, true],
      "9": [true, true, true, true, true, true, true, true, true],
    };
    let pos = 0;
    result += "<div  class='row'>";
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (activeposition[cardNumber][pos]) {
          result +=
            "<div class='col-4' style='heigth:40px'> <img class='img-fluid w-100 h-auto p-0 m-0'  src='" +
            src(typeofCard) +
            "'/> </div>";
        } else {
          result +=
            "<div class='col-4'> <img class='img-fluid w-100 h-auto p-0 m-0'  src='" +
            src(100) +
            "'/> </div>";
        }
        pos++;
      }
    }
    result += "</div>";
  } else if (cardNumber == 1) {
    result =
      "<div class='row me-0'> <div class ='col-12 d-inline-flex justify-content-center' > <img id='lcard' src='" +
      src(typeofCard) +
      "'/> </div></div>";
  } else {
    let idtextcolor = "";
    typeofCard % 2 == 0
      ? (idtextcolor = "cardLettersB")
      : (idtextcolor = "cardLettersR");
    result =
      "<div class='row'><div class='col-12'><h1 id='" +
      idtextcolor +
      "'>" +
      viewCardNumber(cardNumber) +
      "</h1></div></div>";
  }
  return result;
}
function cardCreation(cardNumber = 1, typeofCard = 1) {
  let result =
    "<div class='cardhead'>" +
    createHeadFooter(cardNumber, typeofCard) +
    "</div>" +
    "<div class ='cardbody'>" +
    createBody(cardNumber, typeofCard) +
    "</div>" +
    "<div class='cardfooter rotate'>" +
    createHeadFooter(cardNumber, typeofCard) +
    "</div>";
  return result;
}
function randomCards() {
  return Math.floor(Math.random() * 12) + 1;
}
function randomTypes() {
  return Math.floor(Math.random() * 4) + 1;
}

function newCard() {
  let card = cardCreation(randomCards(), randomTypes());
  //let card = cardCreation(12, 1);
  postMessage(card);
  setTimeout("newCard()", 700);
}
newCard();
