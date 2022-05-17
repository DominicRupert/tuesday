const allPackages = [
  {
    heavy: true,
    priority: false,
    fragile: false,
    big: true,
    to: "Harrington",
    trackingNumber: "1324kjs",
    illegal: true,
  },
  {
    heavy: false,
    priority: true,
    fragile: true,
    big: false,
    to: "Mark",
    trackingNumber: "1325sdk",
    illegal: false,
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    big: true,
    to: "Mick",
    trackingNumber: "jffd147",
    illegal: true,
  },
  {
    heavy: false,
    priority: false,
    fragile: false,
    big: true,
    to: "Jake",
    trackingNumber: "acdc145",
    illegal: false,
  },
  {
    heavy: true,
    priority: true,
    fragile: true,
    big: false,
    to: "Brittany",
    illegal: true,
  },
  {
    heavy: false,
    priority: true,
    fragile: false,
    big: false,
    to: "Zach",
    trackingNumber: "8081baz",
    illegal: false,
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    big: false,
    to: "Jeremy",
    trackingNumber: "suz2367",
    illegal: true,
  },
  {
    heavy: false,
    priority: true,
    fragile: true,
    big: false,
    to: "Yugi",
    trackingNumber: "1325sdk",
    illegal: true,
  },
  {
    heavy: false,
    priority: true,
    fragile: true,
    big: true,
    to: "Josh",
    trackingNumber: "1325sdk",
    illegal: false,
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    big: false,
    to: "Dom",
    trackingNumber: "1325sdk",
    illegal: false,
  },
  {
    heavy: false,
    priority: true,
    fragile: false,
    big: true,
    to: "Bungus",
    trackingNumber: "1325sdk",
    illegal: true,
  },
];

let activePackages = allPackages;
let correctPackage = null;
let guesses = 0;

function startSort() {
  let index = Math.floor(Math.random() * activePackages.length);
  console.log(index);
  activePackages[index].correct = true;
  correctPackage = activePackages[index];
}

function drawPackages() {
  let template = "";
  activePackages.forEach((package) => {
    template += `
  <div class="col-md-3 text-white " onclick="choose('${package.to}')">
  <img src="/mgs.png" class="img-fluid mgs rounded-2 " alt="">
  <p class="text-center py-2"><b>${package.to}</b></p>
  </div>
  `;
  });

  document.getElementById("packages").innerHTML = template;
}
function drawScore() {
  document.getElementById("guess-count").innerHTML =
    "<h3 class='text-light'>current guesses: </h3>" + guesses;
}
function guessWeight() {
  let heavyPackages = activePackages.filter((p) => p.heavy == true);
  activePackages = heavyPackages;
  drawPackages();
}
function guessLegal() {
  let legalPackages = activePackages.filter((p) => p.illegal == false);
  activePackages = legalPackages;
  drawPackages();
}
function guessBig() {
  let bigPackages = activePackages.filter((p) => p.big == true);
  activePackages = bigPackages;
  drawPackages();
}
function guessFragile() {
  let fragilePackages = activePackages.filter((p) => p.fragile == true);
  activePackages = fragilePackages;
  drawPackages();
}
function guessPriority() {
  let urgentPackages = activePackages.filter((p) => p.priority == true);
  activePackages = urgentPackages;
  drawPackages();
}
function guess(attribute) {
  guesses++;
  let filteredPackages = activePackages.filter(
    (p) => p[attribute] == correctPackage[attribute]
  );
  activePackages = filteredPackages;
  drawPackages();
  drawScore();
}

function choose(to) {
  let found = activePackages.find((p) => p.to == to);
  if (found.to == correctPackage.to) {
    toast(`You found them in ${guesses} guesses`, "success");
  } else {
    // window.alert(`you didn't find them, now you die`)
    toast(`you didn't find them, now you die`, "error");
  }
}
function toast(title, icon) {
  // @ts-ignore
  Swal.fire({
    title: title,
    icon: icon,
    toast: true,
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    position: "top",
  });
}
startSort();
drawPackages();
