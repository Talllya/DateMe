let noButtonDefaultBottom = 0;
let noButtonDefaultLeft = 0;

function saveNoPosition() {
    const no = document.getElementById("no");
    const noButtonRect = no.getBoundingClientRect();
    noButtonDefaultBottom = noButtonRect.bottom;
    noButtonDefaultLeft = noButtonRect.left;
    console.log(`first: left ${noButtonDefaultLeft} bottom ${noButtonDefaultBottom}`);
}

function handleYes() {
    const header = document.querySelector("h1");
    header.innerText = "Lezzz goo!";
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");
    yes.remove();
    no.remove();
    document.getElementById("img1").src =
        "catYes.gif";
    const img = document.getElementById("img");
    img.remove();
}

function handleNo() {
    const no = document.getElementById("no");

    const noButtonRect = no.getBoundingClientRect();
    const documentWidth = document.documentElement.clientWidth;
    const documentHeight = document.documentElement.clientHeight;

    const newBottom = noButtonDefaultBottom - random(documentHeight - noButtonRect.height) - noButtonRect.height;
    const newLeft = noButtonDefaultLeft - random(documentWidth - noButtonRect.width) - noButtonRect.width;

    console.log(`new: left ${newLeft} bottom ${newBottom}`);
    
    no.style.bottom = `${newBottom}px`;
    no.style.left = `${newLeft}px`;

    const img = document.getElementById("img");
    img.src = "catNo.gif";

    const nwBottom = random(1100);
    const nwLeft = random(1100);

    img.style.bottom = `${nwBottom}px`;
    img.style.left = `${nwLeft}px`;
}

function random(size) {
    return Math.floor(Math.random() * size);
}
