import * as Classes from './classes';

const Dummy = new Classes.Boss ('Dummy', null, Classes.defineMinStats(null,10,null,4,8))

const Hero = new Classes.Char ('Herp', null, 1, 0, 100, 100, 1, 1, 1, [])

export {Dummy, Hero}