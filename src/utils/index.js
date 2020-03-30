function randomize(deck) {
    var result = [];
    var length = deck.length;
    var range = createRange(0, length);

    while (range.length > 0) {
        var index = randomInt(range.length)
        result.push(deck[range[index]]);
        range.splice(index, 1)
    }
    return result;
}

function createRange(min, max) {
    var result = [];
    for(var i = min; i < max; i++) {
        result.push(i);
    }
    return result;
}

function randomInt(max) {
	return Math.floor((max) * Math.random());
}

export {randomize}