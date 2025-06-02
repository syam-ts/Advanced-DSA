const language: string[] = [
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'C#',
  'Ruby',
  'PHP',
  'Go',
  'Kotlin',
];

const linearSearch = <T>(arr: T[], target: T): T | number => {
  let size: number = arr.length;
  for (let i = 0; i < size; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; //if not found
};

console.log('index of target value: ', linearSearch(language, 'Ruby'))