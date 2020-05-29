async function getVersion() {
    var version = document.getElementById("version"),
        changelog = await fetch("https://hitthemoney.github.io/skin-maker-skins/changelog.txt"),
        changelogText = await changelog.text();
    version.innerHTML = changelogText.slice(0, 6)
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
    getVersion();
    this.url = new URL(document.URL);
    this.creator = url.searchParams.get("creator");
    this.showImg = url.searchParams.get("showImg");
    this.input = document.getElementById("skinmakerName");

    if (creator !== null) {
        input.value = creator;
        findSkins(stringToBool(showImg));
    }
}

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
    var skinInfoArray = []
    var url;
    var lowcName = name.toLowerCase();
    var itemType;
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
}

function findSkins(showImg) {
    var krunkerSkins = getSkinsByCreator(input.value);
    var itemNum = 0;
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
        document.getElementById("author").innerHTML = `They are no skins made by ${input.value}.`;
    } else {
        itemNum = 0;
        while (itemNum < arrayLength) {
            var element = document.getElementById("skins");
            var img = document.createElement("img");
            var p = document.createElement("p");
            var text = document.createTextNode(krunkerSkins[itemNum]);
            var nullText = document.createTextNode("");
            p.appendChild(text);
            var pId = `p${itemNum}`
            var imgId = `img${itemNum}`
            p.id = pId
            p.addEventListener('click', function () {
                showImage(this.id);
            });
            img.id = imgId;
            if (showImg !== true) {
                img.style.display = "none"
            }
            img.src = getUrlBySkinName(krunkerSkins[itemNum]);
            element.appendChild(p);
            element.appendChild(img);
            itemNum++;
        }
        document.getElementById("author").innerHTML = `Skins made by ${input.value}:`;

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