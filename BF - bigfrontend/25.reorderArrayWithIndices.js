function sort(items, newOrder) {
    for (let i = 0; i < items.length; i++) {
        let newid = newOrder[i];
        [items[i], items[newid]] = [items[newid], items[i]];
        [newOrder[i], newOrder[newid]] = [newOrder[newid], newOrder[i]]
    }

}

const A = ['A', 'B', 'C', 'D', 'E', 'F'];
const B = [1, 5, 4, 3, 2, 0];

console.log(sort(A, B)); 
console.log(A); // ['F', 'A', 'E', 'D', 'C', 'B']