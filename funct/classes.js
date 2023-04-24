class Char {
    constructor (name, icon, lvl, xp, reqXp, life, intel, dex, str, inventory) {
        this.name = name,
        this.icon = icon,
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
        let foundItem = false
        this.inventory.forEach(el => {
            if (el.name = item.name) {
                el.quantity++
                return foundItem = true;
            }
        });
        if (!foundItem) {
            this.inventory.push(item)   
        }

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
    constructor (name, art, desc, type, lvl, xpValue, drop, prob, dropProb) {

        this.name = name
        this.art = art,
        this.desc = desc,
        this.type = type,
        this.lvl = lvl,
        this.xpValue = xpValue,
        this.drop = drop;

        if (prob < 0 || prob > 1) {
            throw new Error ("Failed to add drop probability percentage, must be between 0 and 1.")
        } else {
        this.prob = prob
        }

        if (dropProb < 0 || dropProb > 1) {
            throw new Error ("Failed to add drop probability percentage, must be between 0 and 1.")
        } else {
        this.dropProb = dropProb
        }
        
    }
    
    _giveDrop (char) {
        if (Math.random() <= this.dropProb){
            char.addItem(this.drop)
            console.log("received drop")
            return true

        } else {
            console.log("no drops")
            return false
        }
    }

    _isSuccessful () {
        return Math.random() <= this.prob
    }

    send(char) {

        if (char.lvl >= this.lvl) {
            if (this._isSuccessful) {
                this._giveDrop(char)
                char.gainXP(this.xpValue)
                return true
            } else {
                return false
            }
        } else {
            console.log("Char lvl does not meet the requirement")
        }
    }
} 

export {Char, Boss, defineMinStats, Expedition}