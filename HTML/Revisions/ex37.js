function InvertHalves(array)
{
	let half1 = array.slice(0,array.length/2).reverse()
	let half2 = array.slice(array.length/2, array.length).reverse()
	return half1.concat(half2);
}

console.log(InvertHalves([3,5,2,6])) //[5,3,6,2]
console.log(InvertHalves([1,2,3,4,5,6,7,8,9,10])) //[5,4,3,2,1,10,9,8,7,6]