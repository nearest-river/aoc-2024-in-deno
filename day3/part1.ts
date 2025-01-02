
const file=await Deno.readTextFile("./input.txt");
const pattern=/mul\(\d{1,3},\d{1,3}\)/g;

let sum=0;
for(const operation of file.match(pattern)!) {
  const seperator_idx=operation.indexOf(',');
  // mul(...) the num always starts from idx 4
  const operand1=Number(operation.substring(4,seperator_idx));
  const operand2=Number(operation.substring(seperator_idx+1,operation.length-1));
  sum+=operand1*operand2;
}

console.log(sum);
