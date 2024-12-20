

const file=await Deno.readTextFile("./input.txt");
const left=new Array<number>();
const right=new Array<number>();


for(const line of file.split('\n')) {
  const pair=line.split("   ");
  
  left.push(parseInt(pair[0]));
  right.push(parseInt(pair[1]));
}

let similarity_score=0;

for(const i of left) {
  let count=0;
  for(const j of right) {
    if(i==j) count++;
  }

  similarity_score+=i*count;
}

console.log(similarity_score);



