const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let groups = [];
    arr.sort();
       

    for (let i = 0; i < 3; i++) {
        let group = [];
        for (let j = i * 3; j < (i + 1) * 3; j++) {            
            group.push(arr[j]);
        }
        groups[i] = group;
    }
    if (arr.length > 9) {
        groups[3] = 'Оставшиеся студенты:';
        for (let k=9; k< arr.length; k++){
            groups[3] += k < arr.length - 1 ? ` ${arr[k]},` : ` ${arr[k]}` 
        } 
        
    } else {
        groups[3] = 'Оставшиеся студенты: -'
    }
    return groups;
}

// console.log(students.sort());
console.log(sortStudentsByGroups(students));

//==teacher=====================
// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }