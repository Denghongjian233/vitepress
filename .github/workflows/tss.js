function addDisabledProperty(arr1, arr2) {
  for (let obj of arr1) {
    const hasDisabledChildren = obj.children && Array.isArray(obj.children) && obj.children.every(child => child.disabled === true);
    
    if (arr2.includes(obj.id) || hasDisabledChildren) {
      obj.disabled = true;
    }
    
    if (obj.children && Array.isArray(obj.children)) {
      addDisabledProperty(obj.children, arr2);
    }
  }
}
const arr1 = [
  { id: 1, name: 'John', children: [
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice', children: [
      { id: 4, name: 'Bob', disabled: true },
      { id: 5, name: 'Eve', disabled: true }
    ]}
  ]},
  { id: 6, name: 'Dave' }
];

const arr2 = [4, 5];

addDisabledProperty(arr1, arr2);
console.log(arr1);

console.log('')
