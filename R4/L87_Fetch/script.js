'use strict';


fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(resolve => resolve.json())
.then(json => console.log(json));