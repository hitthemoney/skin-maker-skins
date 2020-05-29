function getItemNum(skinName) {
    let num = 0;
    const arrayLength = skins.length;
    let itemNum = 0;
    while (num < arrayLength) {
        if (skins[num].name.toLowerCase() === skinName.toLowerCase()) itemNum = num;
        num++;
    }
    if (itemNum === 0 && skinName.toLowerCase() !== 'arctic hunt') return;
    return itemNum;
}

var url = new URL(document.URL),
    creator = url.searchParams.get("creator"),
    d = document,
    skinsDiv = document.getElementById("skins");

function setSvg() {
    if (creator == null) {
        creator = "";
    }
    var krunkerSkins = getSkinsByCreator(creator);
    var arrayLength = krunkerSkins.length;
    var authorElement = document.getElementById("author");
    var skinsElement = document.getElementById("skins");
    if (authorElement.hasChildNodes()) {
        authorElement.removeChild(authorElement.childNodes[0]);
    }
    while (skinsElement.hasChildNodes()) {
        skinsElement.removeChild(skinsElement.firstChild);
    }
    if (krunkerSkins[0] == undefined) {
        let author = document.getElementById("author");
        author.innerHTML = `They are no skins made by "${creator}".`;
        author.style.fontSize = "50px";
        author.style.textAlign = "center"
        author.style.marginLeft = ""
        document.getElementById("skins").remove();
    } else {
        var width,
            height,
            fontSize;
        if (arrayLength <= 8 && arrayLength >= 4) {
            width = 146.25;
            height = 151;
            fontSize = 16;
        } else if (arrayLength <= 18 && arrayLength >= 9) {
            width = 84.25;
            height = 87;
            fontSize = 12;
        } else if (arrayLength > 18) {
            for (num = 0; num < arrayLength; num++) {
                let color = rarities[skins[getItemNum(krunkerSkins[num])].rarity].color;
                let skinCard = d.createElement("div")
                skinsDiv.append(skinCard)
                skinCard.outerHTML = `<span xmlns="http://www.w3.org/1999/xhtml" class="itemText" id="i${num}" style="margin: 5px; font-size: 16px; color:${color};">${krunkerSkins[num]}</span>`
            }
        } else if (arrayLength <= 2) {
            width = 331.75;
            height = 338.75;
            fontSize = 30;
        } else if (arrayLength == 3) {
            width = 207.75;
            height = 215;
            fontSize = 25;
        }
        if (width !== undefined && height !== undefined && fontSize !== undefined) {
            for (num = 0; num < arrayLength; num++) {
                let color = rarities[skins[getItemNum(krunkerSkins[num])].rarity].color;
                let skinCard = d.createElement("div")
                skinsDiv.append(skinCard)
                skinCard.outerHTML = `<div xmlns="http://www.w3.org/1999/xhtml" class="marketCard" id="i${num}" style="font-size: ${fontSize}px; color:${color}; border:5px solid ${color}; width: ${width}px; height: ${height}px;">${krunkerSkins[num]}<img xmlns="http://www.w3.org/1999/xhtml" draggable="false" class="marketImg" style="width: ${width}px" src="${getUrlBySkinName(krunkerSkins[num])}"></img></div>`
            }
        }
        document.getElementById("author").innerHTML = `Skins made by ${creator}:`;

    }
}

function svgToImg(svg2) {

    var svgData = new XMLSerializer().serializeToString(svg2);

    var img = document.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

    img.onload = function () {
        let imgSrcElem = document.getElementsByClassName("imgSrc")
        for (num = 0; num < imgSrcElem.length; num++) imgSrcElem[num]["content"] = img.src
        document.getElementById("input").value = img.src;
        document.getElementById("downloadImg").download = img.src;
        document.getElementById("downloadImg").href = img.src;
    };
}

function copyLink() {
    let input = document.getElementById("input");
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function downloadImg() {
    window.win = open(document.getElementById("input").value);
    setTimeout('win.document.execCommand("SaveAs")', 100);
    setTimeout('win.close()', 500);
}