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
        "https://media1.tenor.com/m/nZuiRcnxoxsAAAAC/catusjksk.gif";
}

function handleNo() {
    //console.log("w");
    const no = document.getElementById("no");
    const newTop = random();
    const newLeft = random();
    no.style.top = `${newTop}px`;
    no.style.left = `${newLeft}px`;
}

function handleNoClick() {
    const no = document.getElementById("no");
    const newTop = random();
    const newLeft = random();
    no.style.top = `${newTop}px`;
    no.style.left = `${newLeft}px`;
    document.getElementById("img1").src = "https://media1.tenor.com/m/nZuiRcnxoxsAAAAC/catusjksk.gif";
}

function random() {
    return Math.floor(Math.random() * 300);
}
