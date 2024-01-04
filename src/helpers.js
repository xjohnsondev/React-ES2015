
function choice(fruits) {
    console.log(fruits)
    let idx = Math.floor(Math.random() * fruits.length);
    return fruits[idx]
}

function remove(fruits, fruit) {
    let usedFruitIdx = fruits.indexOf(fruit)
    fruits.splice(usedFruitIdx, 1)
    return fruits
}

export { choice, remove };