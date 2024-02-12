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
    const elem = document.querySelector("body");

    const maxBodyPosition = elem.getBoundingClientRect().bottom;

    const newBottom = random(300);
    const newLeft = random(300);

    while(`${newBottom}px`> maxBodyPosition)
    {
        newBottom = random(100);
        newLeft = random(100);
    }
    
    no.style.bottom = `${newBottom}px`;
    no.style.left = `${newLeft}px`;

    const img = document.getElementById("img");
    img.src = "catNo.gif";

    const nwBottom = random(1100);
    const nwLeft = random(1100);

    while(`${nwBottom}px`> maxBodyPosition)
    {
        nwBottom = random(400);
        nwLeft = random(400);
    }

    img.style.Bottom = `${nwBottom}px`;
    img.style.left = `${nwLeft}px`;
}

function random(size) {
    return Math.floor(Math.random() * size);
}
