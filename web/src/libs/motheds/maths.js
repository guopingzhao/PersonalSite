export function generateIntNumber(g, l=0) {
    let {random, round} = Math
    return round(random() * (g - l) + l)
}