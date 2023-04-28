'use strict';

//JSON-PLACEHOLDER
fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(resolve => resolve.json())
	.then(json => console.log(json));


//GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(resolve => resolve.json())
	.then(json => console.log(json));
//POST
fetch('https://jsonplaceholder.typicode.com/posts',{
	method: 'POST',
	body: JSON.stringify({name: 'Oleg', pass: '}Pdiufs'}),
	headers: {
		'Content-type': 'apliacation/json'
	}
})
	.then(resolve => resolve.json())
	.then(json => console.log(json));
