function sumLine(line) { 
  let arr = line.match(/\d/g); 
  if (arr === null) {
    return 0; 
  }
  
  return parseInt(arr[0] + arr[arr.length - 1]);
}

let result = all.reduce((acc, item) => acc + sumLine(item), 0);
