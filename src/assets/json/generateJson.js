const fs = require('fs');

const tasks = [
  {
    id: 1,
    title: 'Vowel Count',
    description: `Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels (but not y).
The input string will only consist of lower case letters and/or spaces.`,
    code: `function getCount(str) {
  let counter = 0;
  let vowels = 'aeiou';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return counter;
}`
  },
  {
    id: 2,
    title: 'List Filtering',
    description: `In this kata you will create a function that takes a list of non-negative integers and strings
and returns a new list with the strings filtered out.`,
    code: `function filter_list(l) {
  return l.filter((n) => {
    return typeof n === 'number';
  });
}`
  },
  {
    id: 3,
    title: 'New Task',
    description: `New task`,
    code: `function findShort(s){
  let arr = s.split(' ');
  let newArr = arr.map(word => word.length)
  return Math.min(...newArr);
}`
  }
];

fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2), 'utf-8');

console.log('✅ tasks.json is generated ✅');
