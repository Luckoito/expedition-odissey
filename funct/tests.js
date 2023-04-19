import {Char, Boss, defineMinStats} from './classes';

const Dummy = new Boss ('Dummy', defineMinStats(null,10,null,4,8))

const hero = new Char ('Herp', 1, 0, 100, 100, 1, 1, 1, [])

export {Dummy, hero}