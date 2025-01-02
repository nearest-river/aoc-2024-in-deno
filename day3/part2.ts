

const file=await Deno.readTextFile("./input.txt");
const pattern=/(do\(\))|(don't\(\))|(mul\(\d{1,3},\d{1,3}\))/g;


let sum=0;
let do_enable=true;
for(const instruction of file.match(pattern)!) {
  if(instruction=="do()") {
    do_enable=true;
    continue;
  } else if (instruction=="don't()") {
    do_enable=false;
    continue;
  }

  if(!do_enable) {
    continue;
  }

  const seperator_idx=instruction.indexOf(',');
  // mul(...) the num always starts from idx 4
  const operand1=Number(instruction.substring(4,seperator_idx));
  const operand2=Number(instruction.substring(seperator_idx+1,instruction.length-1));
  sum+=operand1*operand2;
}

console.log(sum);


