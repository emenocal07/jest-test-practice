const sum = (array) => {
    if (!array) {
        throw new Error('No parameter provided')
    }


    if (array.length === 0) return 0


    return array.reduce((a, b) => a + b, 0)
}

if (typeof module !== 'undefined') {
    module.exports = sum
}