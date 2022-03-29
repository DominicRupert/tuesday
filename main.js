const allPackages = [
  {
    heavy: true,
    priority: false,
    fragile: false,
    to: "Harrington",
    trackingNumber: "1324kjs",
    image: "/mgs.png",
  },
  {
    heavy: false,
    priority: true,
    fragile: true,
    to: "Mark",
    trackingNumber: "1325sdk",
    image: "/mgs.png",
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    to: "Mick",
    trackingNumber: "jffd147",
    image: "/mgs.png",
  },
  {
    heavy: false,
    priority: false,
    fragile: false,
    to: "Jake",
    trackingNumber: "acdc145",
    image: "/mgs.png",
  },
  {
    heavy: true,
    priority: true,
    fragile: true,
    to: "Brittany",
    image: "/mgs.png",
  },
  {
    heavy: false,
    priority: true,
    fragile: false,
    to: "Zach",
    trackingNumber: "8081baz",
    image: "/mgs.png",
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    to: "Jeremy",
    trackingNumber: "suz2367",

    image: "/mgs.png",
  },
];
let realPackages = [];
let choices = 0;
let missingPackage = {};

function startSort() {
  const index = Math.floor(Math.random() * (allPackages.length - 1));
  missingPackage = allPackages[index];
  console.log(missingPackage);
  realPackages[index]
  choices = 0;
  enableAllButtons();
  drawPackages();
}

function enableAllButtons() {
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.disabled = false;
  }
}
function drawPackages() {
  let template = "";
  // if(realPackages.length>1, )
  for (let i = 0; i < realPackages.length; i++) {
    const package = realPackages[i];
    template += `
        
        <div class="col-4 p-3">
        <div class="bg-dark text-white rounded text-center package-card" onclick="pick('${missingPackage}')">
        <img class="object-fit rounded-top" src="${package.image}" alt="">
        <p><b>${package.to}</b></p>
        
        </div>
        </div>
        
        
        `;
  }
  document.getElementById("package").innerHTML = template;
  document.getElementById("choices").innerText = choices.toString();
}
function choose(attribute) {
  choices++;

  realPackages = allPackages.filter(
    (p) => p[attribute] == missingPackage[attribute]
  );
  document.getElementById(attribute).disabled = false;
  drawPackages();
}
function pick(userChoice) {
  if (userChoice == missingPackage) {
    console.log("you win");
  } else {
    console.log("you lose");
  }
}

// drawPackages()
// console.log(allPackages);
startSort();
