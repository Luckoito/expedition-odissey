class Char {
    constructor (name, lvl, xp, reqXp, life, intel, dex, str, inventory) {
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

    hasItem(item) {
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
    constructor (name, minStats) {
        this.name = name
        
        if (typeof minStats === "object"){
            for (const prop in minStats) {
                if (typeof minStats[prop] === "number" || minStats[prop] === null) {
                    this.minStats[prop] = minStats[prop]
                } else {
                    throw new Error ("Failed to create new boss " + name + " due to invalid minStats property type (must be number): " + minStats[prop])
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

export {Char, Boss, defineMinStats}