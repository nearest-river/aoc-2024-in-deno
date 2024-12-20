

const file=await Deno.readTextFile("./input.txt");
const left=new Array<number>();
const right=new Array<number>();


for(const line of file.split('\n')) {
  const pair=line.split("   ");
  
  left.push(parseInt(pair[0]));
  right.push(parseInt(pair[1]));
}

left.sort((a,b)=> a-b);
right.sort((a,b)=> a-b);

let sum=0;
for(let i=0;i<left.length;i++) {
  sum+=Math.abs(right[i]-left[i]);
}

console.log(sum);



