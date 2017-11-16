function split(arr, maxCount) {
	if (arr.length <= maxCount) {
		return arr;
	}

	let innerArrayLength = maxCount;
	let needInnerArrays = false;
	while(arr.length > innerArrayLength*maxCount) {
		needInnerArrays = true;
		innerArrayLength *= maxCount;
	}

	const getElement = needInnerArrays ? 
		(ar) => split(ar, maxCount) :
		(ar) => ar;
	const result = [];
	for (let i = 0; i < arr.length; i += innerArrayLength) {
		result.push(getElement(arr.slice(i, i + innerArrayLength)));
	}
	return result;
}

console.log(split(Array.apply(null, Array(17)).map((_, i) => i), 4));