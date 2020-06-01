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
        changelog = await fetch("https://hitthemoney.github.io/skin-maker-skins/changelog.txt"),
        changelogText = await changelog.text(),
        changelog2 = document.getElementById("changelog")
    version.innerHTML = changelogText.slice(0, 6)
    changelog2.innerHTML = changelogText
}

function hidePopup() {
    clearInterval(this.interval);
    for (num = 0; num < popups.length; num++) document.getElementById(popups[num] + "Holder").style.display = "none"
    document.getElementById("popupHolder").style.display = "none"
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
    this.popups = ["changelog", "itemsales", "download"];
    getVersion();
    this.url = new URL(document.URL);
    this.creator = url.searchParams.get("creator");
    this.showImg = stringToBool(url.searchParams.get("showImg"));
    this.input = document.getElementById("skinmakerName");
    updateCreators(true)

    if (creator !== null) {
        input.value = creator;
        findSkins(showImg, false);
    };
};

function getSkinsByCreator(creator) {
    var itemNum = 0,
        arrayLength = skins.length,
        skinsByCreatorArray = [],
        creator1 = creator,
        creator2 = creator;
    var skinCreator,
        lowcCreator = creator.toLowerCase();
    if (lowcCreator == "krunker") {
        creator1 = "krunker.io"
    } else if (lowcCreator == "jon") {
        creator1 = "jonschmiddy"
    } else if (lowcCreator == "spy") {
        creator1 = "ispy"
    } else if (lowcCreator == "blitz") {
        creator1 = "blitz-.";
        creator2 = "blitz"
    } else if (lowcCreator == "blitz-.") {
        creator1 = "blitz-.";
        creator2 = "blitz"
    } else if (lowcCreator == "halloluke") {
        creator1 = "halloluke0201"
    } else if (lowcCreator == "irizu") {
        creator1 = "_irizu"
    } else if (lowcCreator == "vx_bomb") {
        creator1 = "vx bomb"
    } else if (lowcCreator == "electrode") {
        creator1 = "electrode";
        creator2 = "electrode_"
    } else if (lowcCreator == "electrode_") {
        creator1 = "electrode";
        creator2 = "electrode_"
    } else if (lowcCreator == "float") {
        creator1 = "floatingpoint"
    } else if (lowcCreator == "kltter") {
        creator1 = "kitter";
        creator2 = "kltter"
    } else if (lowcCreator == "kitter") {
        creator1 = "kitter";
        creator2 = "kltter"
    } else if (lowcCreator == "zino") {
        creator1 = "zino";
        creator2 = "zinoob"
    } else if (lowcCreator == "zinoob") {
        creator1 = "zino";
        creator2 = "zinoob"
    } else if (lowcCreator == "jhonxay") {
        creator1 = "jhonxay_playz";
        creator2 = "jhonxay"
    } else if (lowcCreator == "jhonxay_playz") {
        creator1 = "jhonxay";
        creator2 = "jhonxay_playz"
    } else if (lowcCreator == "omar") {
        creator1 = "0mar"
    } else if (lowcCreator == "porg") {
        creator1 = "edibleporg"
    } else if (lowcCreator == "nightlybuild") {
        creator1 = "nightly-build7"
    }

    while (itemNum < arrayLength) {
        skinCreator = skins[itemNum].creator;
        if (skinCreator == undefined) {
            skinCreator = "Krunker.io";
        };
        if (skinCreator.toLowerCase() == lowcCreator) {
            skinsByCreatorArray.push(skins[itemNum].name);
        } else if (skinCreator.toLowerCase() == creator1.toLowerCase()) {
            skinsByCreatorArray.push(skins[itemNum].name);
        } else if (skinCreator.toLowerCase() == creator2.toLowerCase()) {
            skinsByCreatorArray.push(skins[itemNum].name);
        };
        itemNum++;
    };
    return skinsByCreatorArray
};

function getUrlBySkinName(name) {
    var itemNum = 0;
    var arrayLength = skins.length;
    var url;
    var lowcName = name.toLowerCase();
    while (itemNum < arrayLength) {
        skinName = skins[itemNum].name;

        if (skinName.toLowerCase() == lowcName) {
            if (skins[itemNum].keyW == "Knife" || skins[itemNum].keyW == "Axe" || skins[itemNum].keyW == "Toilet") {
                if (skins[itemNum].tex == undefined) {
                    id = skins[itemNum].id;
                    url = `https://assets.krunker.io/textures/previews/melee/melee_${id}.png`;
                } else {
                    id = skins[itemNum].id;
                    tex = skins[itemNum].tex;
                    url = `https://assets.krunker.io/textures/previews/melee/melee_${id}_${tex}.png`;
                }
            } else if (skins[itemNum].keyW == "Head") {
                if (skins[itemNum].tex == undefined) {
                    id = skins[itemNum].id;
                    url = `https://assets.krunker.io/textures/previews/cosmetics/1_${id}.png`;
                } else {
                    id = skins[itemNum].id;
                    tex = skins[itemNum].tex;
                    url = `https://assets.krunker.io/textures/previews/cosmetics/1_${id}_${tex}.png`;
                }
            } else if (skins[itemNum].keyW == "Back") {
                if (skins[itemNum].tex == undefined) {
                    id = skins[itemNum].id;
                    url = `https://assets.krunker.io/textures/previews/cosmetics/2_${id}.png`;
                } else {
                    id = skins[itemNum].id;
                    tex = skins[itemNum].tex;
                    url = `https://assets.krunker.io/textures/previews/cosmetics/2_${id}_${tex}.png`;
                }
            } else if (skins[itemNum].keyW == "Sprays") {
                id = skins[itemNum].id;
                url = `https://assets.krunker.io/textures/sprays/${id}.png`;
            } else if (skins[itemNum].shirtCol !== undefined) {
                id = skins[itemNum].id;
                url = `https://assets.krunker.io/textures/previews/cosmetics/5_${id}.png`;
            } else if (skins[itemNum].midT !== undefined && skins[itemNum].weapon == 6) {
                midT = skins[itemNum].midT;
                mid = skins[itemNum].mid;
                if (midT[18] !== undefined) {
                    id = midT[17] + midT[18]
                } else if (midT[18] == undefined) {
                    id = midT[17]
                };
                url = `https://assets.krunker.io/textures/previews/weapons/weapon_6_m${mid}_${id}.png`;
            } else if (skins[itemNum].keyW == undefined && skins[itemNum].pat == undefined && skins[itemNum].weapon !== undefined && skins[itemNum].id !== undefined) {
                id = skins[itemNum].id;
                weapon = skins[itemNum].weapon;
                url = `https://assets.krunker.io/textures/previews/weapons/weapon_${weapon}_${id}.png`;
            } else if (skins[itemNum].keyW == undefined && skins[itemNum].tex !== undefined && skins[itemNum].movT !== undefined) {
                pat = skins[itemNum].pat;
                weapon = skins[itemNum].weapon;
                url = `https://assets.krunker.io/textures/previews/weapons/weapon_${weapon}_c${pat}.png`;
            } else if (skins[itemNum].keyW == undefined && skins[itemNum].pat == undefined && skins[itemNum].mid !== undefined) {
                midT = skins[itemNum].midT;
                mid = skins[itemNum].mid;
                weapon = skins[itemNum].weapon;
                if (midT == undefined) {
                    url = `https://assets.krunker.io/textures/previews/weapons/weapon_${weapon}_m${mid}.png`
                } else {
                    if (midT[18] !== undefined) {
                        id = midT[17] + midT[18]
                    } else if (midT[18] == undefined) {
                        id = midT[17]
                    };
                    url = `https://assets.krunker.io/textures/previews/weapons/weapon_${weapon}_m${mid}_${id}.png`;
                }
            }

        }
        itemNum++;
    };
    return url;
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
        this.krunkerSkins = getSkinsByCreator(input.value);
    } else {
        if (this.oldAuthor !== undefined) {
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
            }
            var arrayLength = krunkerSkins.length;
            if (krunkerSkins[0] == undefined) {
                document.getElementById("author").innerHTML = `They are no skins made by "${input.value}".`;
            } else {
                this.oldAuthor = input.value;
                if (check.checked == true) {
                    updateSkinsOld(krunkerSkins, showImg, true, "showImage(this.id);")
                } else if (check.checked == false) {
                    for (num = 0; num < arrayLength; num++) {
                        let itemNum = getItemNum(krunkerSkins[num])
                        let color = rarities[skins[itemNum].rarity].color;
                        let skinCard = document.createElement("div")
                        element.append(skinCard)
                        skinCard.outerHTML = `<div onclick="itemsales('https://krunker.io/social.html?p=itemsales&i=${itemNum}');" class="itemCard" id="i${num}" style="color:${color}; border:5px solid ${color};"><span class="itemText">${krunkerSkins[num]}</span><img draggable="false" class="marketImg" src="${getUrlBySkinName(krunkerSkins[num])}"></div>`
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

function showDownloadPopup(creator) {
    this.finalDownloadA = document.getElementById("finalDownloadA");
    document.getElementById("previewImg").outerHTML = `<div id="previewImg" style="background-color: rgba(0, 0, 0, 0.5); box-shadow: inset 0px 0px 0px 5px #fff; border-radius: 10px;"><div id="down-load"> <div style="width: 100%; text-align: center;"> <div class="loadingRing"> <div></div><div></div><div></div><div></div></div><div style="font-size:22px; color:rgba(255,255,255,0.6); margin-right:10px">LOADING</div></div></div></div>`
    document.getElementById("popupHolder").style.display = "block";
    document.getElementById("downloadHolder").style.display = "block";
    let downloadFrame = document.getElementById("downloadFrame");
    downloadFrame.style.display = "none";
    downloadFrame.src = "https://hitthemoney.github.io/skin-maker-skins/canvas/?creator=" + creator;
    setTimeout(() => {
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
                    "png": dWindow.canvas.toDataURL("image/png"),
                    "svgX": (dDocument.getElementById("card").outerHTML).replace("card", "previewImg").replace('id="skins"', 'id="skinsSvg"'),
                    "pngX": dWindow.img.outerHTML
                };
            } catch (err) {
                e = false
            }
            if (e == true) {
                document.getElementById("previewImg").outerHTML = urls.svgX;
                finalDownloadA.href = urls.svg
                finalDownloadA.download = `Skins_made_by_${oldAuthor}`
                clearInterval(interval);
            }
            num++;
            try {
                if (num >= 50) {
                    document.getElementById("previewImg").outerHTML = urls.svgX;
                    finalDownloadA.href = urls.svg
                    finalDownloadA.download = `Skins_made_by_${oldAuthor}`
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
            if (formatSelect.value == "svg") {
                document.getElementById("previewImg").outerHTML = urls.svgX;
                finalDownloadA.href = urls.svg
                finalDownloadA.download = `Skins_made_by_${oldAuthor}`
            } else if (formatSelect.value == "png") {
                document.getElementById("previewImg").outerHTML = urls.pngX;
                finalDownloadA.href = urls.png
                finalDownloadA.download = `Skins_made_by_${oldAuthor}`
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
    for (num = 0; num < arrayLength; num++) {
        let currentCreator = skins[num].creator;
        if (currentCreator == undefined) {
            currentCreator = "Krunker.io";
        }
        let xBool = ((currentCreator.toLowerCase()).split(" ").join("").slice(0, inputLength) == inputVal.toLowerCase());
        if (startUpBool == true) {
            xBool = true
        }
        if (lowCCreatorArray.indexOf(currentCreator.toLowerCase()) == -1 && xBool && currentCreator.toLowerCase() !== "jhonxay_playz" && currentCreator.toLowerCase() !== "zinoob" && currentCreator.toLowerCase() !== "blitz-." && currentCreator.toLowerCase() !== "electrode_" && currentCreator.toLowerCase() !== "kltter") {
            lowCCreatorArray.push(currentCreator.toLowerCase());
            creatorArray.push(currentCreator);
        };
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
    updateSkinsOld(skinCreators, false, false, `findSkins(${this.showImg}, false, itemArray[(this.id).substr(1)])`)
    document.getElementById("author").innerHTML = `Creators:`;
    document.getElementById("downloadBtn").style.display = "none"
}