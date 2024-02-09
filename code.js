function handleYes() {
    // new comment
    const header = document.querySelector("h1");
    //console.log(header);
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
    //console.log("w");
    const no = document.getElementById("no");
    const newTop = random(300);
    const newLeft = random(300);
    no.style.top = `${newTop}px`;
    no.style.left = `${newLeft}px`;

    const img = document.getElementById("img");
    img.src = "catNo.gif";

    const nwTop = random(1100);
    const nwLeft = random(1100);
    img.style.top = `${nwTop}px`;
    img.style.left = `${nwLeft}px`;
      
}

function handleNoClick() {
    const no = document.getElementById("no");
    const newTop = random(300);
    const newLeft = random(300);
    document.getElementById("img1").src = "catNo.gif";
    no.style.top = `${newTop}px`;
    no.style.left = `${newLeft}px`;

    const img = document.getElementById("img");
    img.remove();
}

function random(size) {
    return Math.floor(Math.random() * size);
}
