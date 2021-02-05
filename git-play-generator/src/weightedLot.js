export function weightedSlots() {
    let chances = Math.floor(Math.random() * 5)
    if(chances === 1) {
        return "You win"
    }else{
        return "try again"
    }
}