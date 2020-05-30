var d = document,
    url = new URL(d.URL),
    creator = url.searchParams.get("creator"),
    embed = url.searchParams.get("embed"),
    skinsDiv = d.getElementById("skins");

function setSvg() {
    if (creator == null) {
        creator = "";
    }
    var krunkerSkins = getSkinsByCreator(creator);
    var arrayLength = krunkerSkins.length;
    var authorElement = d.getElementById("author");
    var skinsElement = d.getElementById("skins");
    if (authorElement.hasChildNodes()) {
        authorElement.removeChild(authorElement.childNodes[0]);
    }
    while (skinsElement.hasChildNodes()) {
        skinsElement.removeChild(skinsElement.firstChild);
    }
    if (krunkerSkins[0] == undefined) {
        let author = d.getElementById("author");
        author.innerHTML = `They are no skins made by "${creator}".`;
        author.style.fontSize = "50px";
        author.style.textAlign = "center"
        author.style.marginLeft = ""
        d.getElementById("skins").remove();
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
                skinCard.outerHTML = `<span xmlns="http://www.w3.org/1999/xhtml" class="itemText" id="i${num}" style="display: inline; margin: 5px; font-size: 16px; color:${color};">${krunkerSkins[num]}</span>`
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
                skinCard.outerHTML = `<div xmlns="http://www.w3.org/1999/xhtml" class="marketCard" id="i${num}" style="font-size: ${fontSize}px; color:${color}; border:5px solid ${color}; width: ${width}px; height: ${height}px;">${krunkerSkins[num]}<img xmlns="http://www.w3.org/1999/xhtml" draggable="false" class="marketImage" style="width: ${width}px" src="${getUrlBySkinName(krunkerSkins[num])}"></img></div>`
            }
        }
        d.getElementById("author").innerHTML = `Skins made by ${creator}:`;

    }
}

function svgToImg(svg2) {

    var svgData = new XMLSerializer().serializeToString(svg2);

    window.canvas = d.createElement("canvas");
    canvas.width = 800;
    canvas.height = 530;
    var ctx = canvas.getContext("2d");

    window.img = d.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));
    img.id = "previewImg"

    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        pngLink = canvas.toDataURL("image/png");
        let imgSrcElem = d.getElementsByClassName("imgSrc")
        for (num = 0; num < imgSrcElem.length; num++) imgSrcElem[num]["content"] = img.src
        d.getElementById("input").value = img.src;
        d.getElementById("downloadSvg").download = `Skins_by_${creator}.SVG`;
        d.getElementById("downloadSvg").href = img.src;

        d.getElementById("input2").value = pngLink;
        d.getElementById("downloadPng").download = `Skins_by_${creator}.PNG`;
        d.getElementById("downloadPng").href = pngLink;

        //d.body.append(img)

        if (embed !== null) {
            try {
                embedScript();
            } catch (e) {
                console.warn(`Embed error:
${e}`)
            }
        }
    };
}

function copyLink(num) {
    let input = d.getElementsByTagName("input")[num];
    input.select();
    input.setSelectionRange(0, 99999);
    d.execCommand("copy");
}

function downloadImg() {
    window.win = open(d.getElementById("input").value);
    setTimeout('win.d.execCommand("SaveAs")', 100);
    setTimeout('win.close()', 500);
}