const volumeOfCube = (width) => {
    return Math.pow(width, 3)
}
document.write(`<div> ${volumeOfCube(20)} m<sup>3</sup></div>`)
const colorCode = (name) => {
    switch (name) {
        case "RED":
        case "Red":
        case "red":
            return ("#f00")
        case "green":
            return ("#0f0")
        case "blue":
            return ("#00f")

        default:
            return ("#000")
    }
}
document.write(`<div> ${colorCode("Red")} </div>`)