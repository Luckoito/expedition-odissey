class Char {
    constructor (icon, name, lvl, xp, reqXp, life, intel, dex, str, inventory) {
        this.icon = icon,
        this.name = name,
        this.lvl = lvl,
        this.xp = xp,
        this.reqXp = reqXp,
        this.attributes = {
            life: life,
            intel: intel,
            dex: dex,
            str: str
        },
        this.inventory = inventory
    }

    addItem (item) {
        this.inventory.push(item)
    }

    getItem(item) {
        return this.inventory.indexOf(item)
    }

    removeItem (index) {
        if (index < 0) {
            throw new Error ("Item index is invalid")
        } else {
            this.inventory.splice(index,1)
        }
    }

    levelUp () {
        do {
            this.lvl += 1
            this.reqXp += Math.ceil(this.reqXp * 0.7)
        } while (this.xp >= this.reqXp);
    }

    gainXP (quantity) {
        this.xp += quantity
        if (this.xp >= this.reqXp) {
            this.levelUp()
        }
    }

}

class Boss {
    minStats = {
        lvl: null,
        life: null,
        intel: null,
        dex: null,
        str: null,
        item: null
    }
    constructor (icon, name, minStats) {
        this.name = name
        this.icon = icon
        if (typeof minStats === "object"){
            for (const prop in minStats) {
                if (typeof minStats[prop] === "number" || minStats[prop] === null || typeof minStats[prop] === "object") {
                    this.minStats[prop] = minStats[prop]
                } else {
                    throw new Error ("Failed to create new boss " + name + " due to invalid minStats property type (must be number, null or object): " + minStats[prop])
                }
            }
        } else {
            throw new Error ("Failed to create new boss ${name} due to invalid minStats object: ${minStats}")
        }
    }
}

const defineMinStats = (lvl, life, intel, dex, str) => {
    let minStats ={}
    return minStats = {
        lvl: lvl,
        life: life,
        intel: intel,
        dex: dex,
        str: str
    }
}

class Expedition {
    constructor (art, name, desc, type, lvl, xpValue, itemDrop, prob, itemProb) {
        this.art = art
        this.name = name
        this.desc = desc
        this.type = type
        this.lvl = lvl
        this.xpValue = xpValue
        this.itemDrop = itemDrop
        this.prob = prob
        this.itemProb = itemProb
    }
    
    giveDrop () {
        Math.random() > this.itemDrop
            
    }

    isSuccessful () {
        Math.random() > this.prob
    }

    send(char) {
        (this.isSuccessful ?
            () => {
                char.addItem(this.itemDrop)
                char.gainXP(this.xpValue)
                return "Sucesso!"
            }
        :   () => {
                return "Falha :("
            }
        )
    }
} 

export {Char, Boss, defineMinStats, Expedition}