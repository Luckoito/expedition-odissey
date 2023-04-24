import * as Classes from './classes';
import * as Items from './items';

const Dummy = new Classes.Boss ('Dummy', null, defineMinStats(null,10,null,4,8))

const Hero = new Classes.Char ('Herp', null, 1, 0, 100, 100, 1, 1, 1, [])

const expWitchesHouse = new Classes.Expedition ("Witches house", "", 
"There's a house that looks abandoned in the horizon. It's scary, but it seems like there could be some valuable stuff inside",
'intel', 5, 100, Items.WitchesHair, 0.5, 0.8)

export {Dummy, Hero, expWitchesHouse}