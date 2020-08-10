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

async function getVersion() {
    var version = document.getElementById("version"),
        changelog = await fetch("https://hitthemoney.com/skin-maker-skins/changelog.txt"),
        changelogText = await changelog.text(),
        changelog2 = document.getElementById("changelog")
    version.innerHTML = changelogText.slice(0, 6)
    changelog2.innerHTML = changelogText
}

function hidePopup() {
    clearInterval(this.interval);
    for (num = 0; num < popups.length; num++) document.getElementById(popups[num] + "Holder").style.display = "none"
    document.getElementById("popupHolder").style.display = "none"
    try {
        document.getElementById("sStyle").remove()
    } catch {

    }
}

function stringToBool(string) {
    if (string == "false") {
        var boolToReturn = false;
    } else if (string == "true") {
        var boolToReturn = true;
    } else {
        var boolToReturn = undefined;
    };
    return boolToReturn;
};

function startUp() {
    this.skinCreators = getCreators(true);
    this.formatSelect = document.getElementById("formatSelect");
    this.popups = ["changelog", "itemsales", "download", "maintenance"];
    getVersion();
    this.url = new URL(document.URL);
    this.creator = url.searchParams.get("creator");
    if (creator !== null) {
        if (creator.toLowerCase() == "everyone") {
            window.location = "https://yee.how/item-list/"
        }
    }
    this.showImg = stringToBool(url.searchParams.get("showImg"));
    this.input = document.getElementById("skinmakerName");
    updateCreators(true)

    if (creator !== null) {
        input.value = creator;
        findSkins(showImg, false);
    };
};

function getSkinsByCreator(creator, numB) {
    if (creator !== "") {
        var itemNum = 0,
            arrayLength = skins.length,
            skinsByCreatorArray = [],
            skinsByCreatorArray2 = [],
            skinsByCreatorArray3 = [],
            creator1 = creator,
            creator2 = creator;
        var skinCreator,
            skinCreator1,
            skinCreator2,
            lowcCreator = creator.toLowerCase();
        switch (lowcCreator) {
            case "krunker":
                creator1 = "krunker.io"
                break;
            case "jon":
                creator1 = "jonschmiddy"
                break;
            case "spy":
                creator1 = "ispy"
                break;
            case "blitz":
            case "blitz-.":
                creator1 = "blitz-.";
                creator2 = "blitz";
                break;
            case "halloluke":
                creator1 = "halloluke0201";
                break;
            case "irizu":
            case "_irizu":
                creator1 = "_irizu"
                creator2 = "irizu"
                break;
            case "vx_bomb":
                creator1 = "vx bomb"
                break;
            case "electrode":
            case "electrode_":
                creator1 = "electrode";
                creator2 = "electrode_";
                break;
            case "float":
                creator1 = "floatingpoint"
                break;
            case "kltter":
            case "kitter":
                creator1 = "kitter";
                creator2 = "kltter"
                break;
            case "zino":
            case "zinoob":
                creator1 = "zino";
                creator2 = "zinoob";
                break;
            case "jhonxay":
            case "jhonxay_playz":
                creator1 = "jhonxay";
                creator2 = "jhonxay_playz";
                break;
            case "omar":
                creator1 = "0mar"
                break;
            case "porg":
                creator1 = "edibleporg"
                break;
            case "nightlybuild":
                creator1 = "nightly-build7"
                break;
        }

        while (itemNum < arrayLength) {
            skinCreator = skins[itemNum].creator
            if (skinCreator == undefined) {
                skinCreator = "Krunker.io";
            };
            skinCreator1 = (skinCreator).split(" & ")[0];
            skinCreator2 = (skinCreator).split(" & ")[1];
            if (skinCreator2 == undefined) {
                skinCreator2 = "";
            };
            let toPush = itemNum
            let toPush2 = skins[itemNum].name
            if (skinCreator1.toLowerCase() == lowcCreator || skinCreator1.toLowerCase() == creator1.toLowerCase() || skinCreator1.toLowerCase() == creator2.toLowerCase()) {
                skinsByCreatorArray.push(toPush);
                skinsByCreatorArray2.push(toPush2);
            } else if (skinCreator2.toLowerCase() == lowcCreator || skinCreator2.toLowerCase() == creator1.toLowerCase() || skinCreator2.toLowerCase() == creator2.toLowerCase()) {
                skinsByCreatorArray.push(toPush);
                skinsByCreatorArray2.push(toPush2);
            }
            itemNum++;
        };
        if (!numB) {
            return skinsByCreatorArray;
        } else {
            return [skinsByCreatorArray, skinsByCreatorArray2];
        }
    } else {
        return [
            [],
            []
        ];
    }
};

function getUrlBySkinName(skinName, itemNum2) {
    var itemNum,
        t;
    if (itemNum2 == undefined) {
        let num = 0;
        const arrayLength = skins.length;
        let itemNum = 0;
        while (num < arrayLength) {
            if (skins[num].name.toLowerCase() === skinName.toLowerCase()) itemNum = num;
            num++;
        }
        if (itemNum === 0 && skinName.toLowerCase() !== 'arctic hunt') throw new Error("Invalid Skin!");
        t = skins[itemNum]
        if (!t.midT == false || t.midT == 0) t.midT = t.midT.toString()
    } else {
        itemNum = itemNum2
        t = skins[itemNum]
        if (!t.midT == false || t.midT == 0) t.midT = t.midT.toString()
    }
    /*
    return "https://assets.krunker.io" + ("/textures/" + (t.type && 4 == t.type ? "sprays/" + t.id : "previews/" + (t.type && (3 > t.type || 5 == t.type) ? "cosmetics/" + t.type + "_" + t.id + (t.tex ? "_" + t.tex : "") : types[t.type || 0] + (t.type && 3 == t.type ? t.id + (null == t.pat ? null == t.tex ? "" : "_" + t.tex : "_c" + t.pat) : (t.weapon || 0) + "_" + (null == t.mid ? null == t.pat ? t.tex ? t.tex : t.id : "c" + t.pat : "m" + t.mid + (null == t.midT ? "" : "_" + t.midT.split("_").slice(-1)[0]))))) + ".png")
    is from https://krunker.io/social.html, I did not code this
    */
    return "https://assets.krunker.io" + ("/textures/" + (t.type && 4 == t.type ? "sprays/" + t.id : "previews/" + (t.type && (3 > t.type || 5 == t.type) ? "cosmetics/" + t.type + "_" + t.id + (t.tex ? "_" + t.tex : "") : types[t.type || 0] + (t.type && 3 == t.type ? t.id + (null == t.pat ? null == t.tex ? "" : "_" + t.tex : "_c" + t.pat) : (t.weapon || 0) + "_" + (null == t.mid ? null == t.pat ? t.tex ? t.tex : t.id : "c" + t.pat : "m" + t.mid + (null == t.midT ? "" : "_" + t.midT.split("_").slice(-1)[0]))))) + ".png")
};

function findSkins(showImg, slider, author) {
    if (author !== undefined) {
        input.value = author
    };
    var authorElement = document.getElementById("author");
    var element = document.getElementById("skins");
    var check = document.getElementById("check");
    var loadMessage = document.getElementById("loadMessage");
    if (slider !== true) {
        this.oldAuthor = input.value;
        if (this.oldAuthor.toLowerCase() == "everyone") {
            window.location = "https://yee.how/item-list"
        }
        this.skinData = getSkinsByCreator(input.value, true);
        this.krunkerSkinsNames = skinData[1]
        this.krunkerSkins = skinData[0];
    } else {
        if (this.oldAuthor !== undefined) {
            if (this.oldAuthor.toLowerCase() == "everyone") {
                window.location = "https://yee.how/item-list"
            }
            input.value = this.oldAuthor;
        }
    };
    if (slider == false || authorElement.innerHTML !== "Creators:") {
        let downloadBtn = document.getElementById("downloadBtn");
        downloadBtn.style.display = "block";
        var skinsElement = document.getElementById("skins");
        loadMessage.style.display = "block";
        if (authorElement.hasChildNodes()) {
            authorElement.removeChild(authorElement.childNodes[0]);
        };
        while (skinsElement.hasChildNodes()) {
            skinsElement.removeChild(skinsElement.firstChild);
        };
        setTimeout(() => {
            downloadBtn.onclick = function () {
                showDownloadPopup(input.value)
                //showMaintenancePopup("Download canvas is currently under maintenance.")
            }
            var arrayLength = krunkerSkins.length;
            if (krunkerSkins[0] == undefined) {
                document.getElementById("author").innerHTML = `They are no skins made by "${input.value}".`;
            } else {
                this.oldAuthor = input.value;
                if (check.checked == true) {
                    updateSkinsOld(krunkerSkinsNames, showImg, true, "showImage(this.id);")
                } else if (check.checked == false) {
                    for (num = 0; num < arrayLength; num++) {
                        let itemNum = krunkerSkins[num]
                        let skinName = skins[krunkerSkins[num]].name
                        let color = rarities[skins[itemNum].rarity].color;
                        let skinCard = document.createElement("div")
                        element.append(skinCard)
                        let image = "";
                        let extraInfo = "";
                        let exStyle = "";
                        if (skins[itemNum].rarity == 6) exStyle = "animation: rainbowCard .5s linear infinite"
                        if (skins[itemNum].name == "RGB" || skins[itemNum].name == "Hackusate") extraInfo = 'style="animation: rgbHue .8s steps(36) infinite"'
                        if (skins[itemNum].keyW !== "Spray" && skins[itemNum].keyW !== "Sprays") image = `<img draggable="false" class="marketImg" ${extraInfo} src="${getUrlBySkinName(skinName, itemNum)}">`
                        else if (skins[itemNum].keyW == "Spray" || skins[itemNum].keyW == "Sprays") image = `<div draggable="false" class="marketImg marketImgSpray" style="background-image: url(${getUrlBySkinName(skinName, itemNum)}); animation: sprayAni${skins[itemNum].frames} ${skins[itemNum].frames}s infinite"></div>`
                        skinCard.outerHTML = `<div onclick="itemsales('https://krunker.io/social.html?p=itemsales&i=${itemNum}');" class="itemCard" id="i${num}" style="color:${color}; border:5px solid ${color}; ${exStyle}"><span class="itemText">${skinName}</span>${image}</div>`
                    }
                    document.getElementById("author").innerHTML = `Skins made by ${input.value}:`;
                    document.getElementById("author").style = "display: block;font-size: 2em;margin-top: 1px; margin-bottom: 15px;"
                    loadMessage.style.display = "none"
                }
            }
        }, 1);

    }
}

function showImage(id) {
    pId = document.getElementById(id);
    imgId = `img${id.substr(1)}`
    img = document.getElementById(imgId);
    img.style = ""
    pId.addEventListener('click', function () {
        hideImage(this.id);
    });
}

function hideImage(id) {
    pId = document.getElementById(id);
    imgId = `img${id.substr(1)}`
    img = document.getElementById(imgId);
    img.style.display = "none"
    pId.addEventListener('click', function () {
        showImage(this.id);
    });
}


function showChangelog() {
    let changelogHolder = document.getElementById("changelogHolder");
    changelogHolder.style.display = "block";
    document.getElementById("popupHolder").style.display = "block";
}

function itemsales(url) {
    document.getElementById("popupHolder").style.display = "block";
    document.getElementById("itemsalesHolder").style.display = "block";
    let goToBtn = document.getElementById("goToBtn");
    let itemsalesFrame = document.getElementById("itemsalesFrame");
    goToBtn.innerHTML = "Go to " + url;
    goToBtn.onclick = function () {
        window.open(url)
    };
    itemsalesFrame.src = url
}

function setSvgX(svgX) {
    let previewImg = document.getElementById("previewImg")
    previewImg.outerHTML = `<div id="previewImg">${svgX}</div>`;
    let height = document.getElementsByTagName("svg")[0].getAttribute("height")
    if (height > 830) {
        let s = document.createElement("style")
        s.innerHTML = `#previewImg {overflow-y: auto} svg {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEWCgoJkZGSlpaWQkJCpQV22AAAATUlEQVQY02PABMwHkHlaq0BkaMgfGAMsygqhEAzCgB+Zw7WqAcZo/oCpNjQAwSAR/Ac6efHREIjbF+B0HmuoAwPDn1WrFoAZDFAGJgAAAEAU2u/+qvsAAAAASUVORK5CYII=); background-repeat:repeat;background-size:300px 300px;image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;box-shadow:inset 0px 0px 0px 5px #fff; border-radius: 20px;}`
        s.id = "sStyle"
        document.body.append(s)
    }
}

function showDownloadPopup(creator) {
    this.finalDownloadA = document.getElementById("finalDownloadA");
    document.getElementById("previewImg").outerHTML = `<div id="previewImg" style="background-color: rgba(0, 0, 0, 0.5); top: 0%; box-shadow: inset 0px 0px 0px 5px #fff; border-radius: 10px;"><div id="down-load"> <div style="width: 100%; text-align: center;"> <div class="loadingRing"> <div></div><div></div><div></div><div></div></div><div style="font-size:22px; color:rgba(255,255,255,0.6); margin-right:10px">LOADING</div></div></div></div>`
    document.getElementById("popupHolder").style.display = "block";
    document.getElementById("downloadHolder").style.display = "block";
    let downloadFrame = document.getElementById("downloadFrame");
    downloadFrame.style.display = "none";
    downloadFrame.src = "https://hitthemoney.com/skin-maker-skins/canvas/?creator=" + creator;
    //downloadFrame.src = "/canvas/?creator=" + creator;
    setTimeout(() => {
        var oldAuthor2 = oldAuthor.replace(".", "")
        formatSelect.value = "svg";
        window.dWindow = (downloadFrame.contentWindow || downloadFrame.contentDocument);
        window.dDocument = dWindow.document;
        var num = 0;
        this.interval = setInterval(() => {
            let e = true
            try {
                window.dWindow = (downloadFrame.contentWindow || downloadFrame.contentDocument);
                window.dDocument = dWindow.document;
                this.urls = {
                    "svg": dWindow.img.src,
                    "png": dDocument.getElementById("downloadPng").href,
                    "svgX": (dDocument.getElementById("card").outerHTML).replace('id="skins"', 'id="skinsSvg"'),
                    "pngX": dWindow.img.outerHTML.replace("previewImg", "")
                };
            } catch (err) {
                e = false
            }
            if (e == true && urls.png !== "") {
                setSvgX(urls.svgX)
                finalDownloadA.href = urls.svg
                finalDownloadA.download = `Skins_made_by_${oldAuthor2}`
                clearInterval(interval);
            }
            num++;
            try {
                if (num >= 75) {
                    setSvgX(urls.svgX)
                    finalDownloadA.href = urls.svg
                    finalDownloadA.download = `Skins_made_by_${oldAuthor2}`
                    clearInterval(interval);
                }
            } catch (err) {
                alert(`AN ERROR HAS OCCURED!
Try checking your internet.

${err}`)
                hidePopup()
                loadMessage.style.display = "none"
                clearInterval(interval);
            }
        }, 100);
        formatSelect.addEventListener('change', function () {
            var oldAuthor2 = oldAuthor.replace(".", "")
            if (formatSelect.value == "svg") {
                setSvgX(urls.svgX)
                finalDownloadA.href = urls.svg
                finalDownloadA.download = `Skins_made_by_${oldAuthor2}`
            } else if (formatSelect.value == "png") {
                document.getElementById("previewImg").outerHTML = `<div id="previewImg">${urls.pngX}</div>`;
                finalDownloadA.href = urls.png
                finalDownloadA.download = `Skins_made_by_${oldAuthor2}`
            };
        })
    }, 1);
};

function getCreators(startUpBool) {
    let input = document.getElementById("skinmakerName");
    var creatorArray = [],
        lowCCreatorArray = [],
        arrayLength = skins.length,
        inputLength = input.value.split(" ").join("").length,
        inputVal = input.value.split(" ").join("");

    let xBool = (("Everyone".toLowerCase()).split(" ").join("").slice(0, inputLength) == inputVal.toLowerCase());
    if (startUpBool == true) {
        xBool = true
    }
    if (lowCCreatorArray.indexOf("Everyone".toLowerCase()) == -1 && xBool) {
        lowCCreatorArray.push("Everyone".toLowerCase());
        creatorArray.push("Everyone");
    };

    for (num = 0; num < arrayLength; num++) {
        let currentCreator = skins[num].creator;
        if (currentCreator == undefined) {
            currentCreator = "Krunker.io";
        }
        let xBool = ((currentCreator.toLowerCase()).split(" ").join("").slice(0, inputLength) == inputVal.toLowerCase());
        if (startUpBool == true) {
            xBool = true
        }
        if (lowCCreatorArray.indexOf(currentCreator.toLowerCase()) == -1 && xBool && currentCreator.toLowerCase() !== "jhonxay" && currentCreator.toLowerCase() !== "zino" && currentCreator.toLowerCase() !== "blitz" && currentCreator.toLowerCase() !== "electrode_]" && currentCreator.toLowerCase() !== "kltter" && currentCreator.toLowerCase() !== "nxbulah & kilfy") {
            lowCCreatorArray.push(currentCreator.toLowerCase());
            creatorArray.push(currentCreator);
        };
        if (inputLength > 1 && creatorArray.indexOf("kitter") == -1 && startUpBool !== true) {
            if (currentCreator == "Kltter" && lowCCreatorArray.indexOf(currentCreator.toLowerCase()) == -1 && (inputVal.toLowerCase().slice(0, inputLength) == ("Kltter".toLowerCase()).split(" ").join("").slice(0, inputLength))) {
                lowCCreatorArray.push("Kltter".toLowerCase());
                creatorArray.push("Kltter");
            };
        }
    };
    return creatorArray;
};

function updateSkinsOld(itemArray, showImg, imgBool, onclick) {
    var element = document.getElementById("skins");
    let arrayLength = itemArray.length;
    for (num = 0; num < arrayLength; num++) {
        var p = document.createElement("p");
        var text = document.createTextNode(itemArray[num]);
        p.appendChild(text);
        var pId = `p${num}`
        p.id = pId
        p.className = "px"
        p.addEventListener('click', function () {
            eval(onclick)
        });
        element.appendChild(p);
        if (imgBool == true) {
            var img = document.createElement("img");
            var imgId = `img${num}`
            img.id = imgId;
            if (showImg !== true) {
                img.style.display = "none"
            }
            img.src = getUrlBySkinName(itemArray[num]);
            element.appendChild(img);
            p.style.fontSize = "1.25em"
        } else {
            p.style.fontSize = "1.75em"
        }
    }
    loadMessage.style.display = "none"
    document.getElementById("author").innerHTML = `Skins made by ${input.value}:`;
    document.getElementById("author").style = "display: block;font-size: 2em;margin-top: 1px; margin-bottom: 15px;"
}

function updateCreators(b) {
    if (b == undefined) b = false;
    skinCreators = getCreators(b);
    let skinsElement = document.getElementById("skins")
    while (skinsElement.hasChildNodes()) {
        skinsElement.removeChild(skinsElement.firstChild);
    };
    //skinCreators.unshift("Everyone")
    updateSkinsOld(skinCreators, false, false, `if (this.innerHTML !== "Everyone") {findSkins(${this.showImg}, false, itemArray[(this.id).substr(1)])} else {window.location = "https://yee.how/item-list"}`)
    document.getElementById("author").innerHTML = `Creators:`;
    document.getElementById("author").style.fontSize = "2.75em";
    document.getElementById("downloadBtn").style.display = "none"
}

showMaintenancePopup = (val) => {
    document.getElementById("popupHolder").style.display = "block";
    document.getElementById("maintenanceHolder").style.display = "block";
    document.getElementById("maintenanceHolder").innerHTML = val;
}