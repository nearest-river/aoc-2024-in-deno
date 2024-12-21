

const file=await Deno.readTextFile("./input.txt");
let safe_count=0;


for(const line of file.split('\n')) {
  const report=line.split(' ');
  let increasing=true;
  for(let i=0;i<report.length-1;i++) {
    const delta=parseInt(report[i])-parseInt(report[i+1]);
    const abs_dif=Math.abs(delta);

    if(abs_dif<1 || abs_dif>3) {
      safe_count--;
      break;
    }

    if(i==0) {
      increasing=delta>0;
      continue;
    }

    if(increasing!=delta>0) {
      safe_count--;
      break;
    }

    increasing=delta>0;
  }

  safe_count++;
}

console.log(safe_count);




