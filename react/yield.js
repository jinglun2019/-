function* r(num) {
	const r1 = yield compute(num);
	yield compute(r1);
}

function compute(num) {
	return new Promise(resolve => {
		setTimeout(()=>{
			const ret = num * num;
			console.log(ret);
			resolve(ret);
	},1000);
});
}

let it = r(2);
function next(data) {
	let {value,done} = it.next(data);
	if(!done) {
		value.then(num => {
			next(num);
		});
	}
}

next();