

const file=await Deno.readTextFile("./input.txt");
let safe_count=0;


for(const line of file.split('\n')) {
  const report=line.split(' ')
  .map(Number);

  if(is_safe(report)) {
    safe_count++;
    continue;
  }

  for(let i=0;i<report.length;i++) {
    const report_clone=report
    .filter((_,idx)=> idx!==i);

    if(is_safe(report_clone)) {
      safe_count++;
      break;
    }
  }
}

function is_safe(report: number[]) {
  let increasing=true;
  for(let i=0;i<report.length-1;i++) {
    const delta=report[i+1]-report[i];

    if(delta==0 || Math.abs(delta)>3) {
      return false;
    }

    if(i==0) {
      increasing=delta>0;
      continue;
    }

    if(increasing!=delta>0) {
      return false;
    }

    increasing=delta>0;
  }

  return true;
}

console.log(safe_count);




