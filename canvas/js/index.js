window.getBase64Image = function (img) {
    this.img2 = img
    document.body.append(img)
    img.onload = function () {
        this.canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 256;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        document.body.append(canvas)
        var dataURL = canvas.toDataURL("image/png");
        console.log([img, ctx, canvas])
        console.log(dataURL)
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
}

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
                this.wallUrl = 'data:image/png;base64,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'
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
                let img = document.createElement("img")
                img.src = getUrlBySkinName(krunkerSkins[num])
                img.width = width
                img.height = width
                let imgUrl = ""
                let bool = false;
                for (num2 = 0; bool == false; num2++) {
                    if ((base64URLS[num2].name).toLowerCase() == krunkerSkins[num].toLowerCase()) {
                        imgUrl = base64URLS[num2].url
                        bool = true
                    } if (num2 >= skins.length - 1) {
                        bool = true
                    }
                }
                let color = rarities[skins[getItemNum(krunkerSkins[num])].rarity].color;
                let skinCard = d.createElement("div")
                skinsDiv.append(skinCard)
                skinCard.outerHTML = `<div xmlns="http://www.w3.org/1999/xhtml" class="marketCard" id="i${num}" style="font-size: ${fontSize}px; color:${color}; border:5px solid ${color}; width: ${width}px; height: ${height}px;">${krunkerSkins[num]}<img xmlns="http://www.w3.org/1999/xhtml" draggable="false" class="marketImage" style="width: ${width}px" src="${imgUrl}"></img></div>`
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
        for (num = 0; num < imgSrcElem.length; num++) imgSrcElem[num]["content"] = pngLink
        d.getElementById("input").value = pngLink;
        d.getElementById("downloadSvg").download = `Skins_by_${creator}.SVG`;
        d.getElementById("downloadSvg").href = img.src;

        d.getElementById("input2").value = pngLink;
        d.getElementById("downloadPng").download = `Skins_by_${creator}.PNG`;
        d.getElementById("downloadPng").href = pngLink;

        document.querySelector('meta[name="og:image"]').setAttribute("content", pngLink);

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