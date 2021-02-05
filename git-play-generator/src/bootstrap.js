import { SayHello } from './rhyu-class'
import { shiftPopArray } from "./array_function";
import { weightedSlots } from "./weightedLot"
import { quote, fix } from './git-play-strings.js'

console.log(shiftPopArray([1, 2, 3, 4]));
console.log(weightedSlots())
console.log(quote)
console.log(fix())
let user = new SayHello('hi')
console.log(user.greeting())
