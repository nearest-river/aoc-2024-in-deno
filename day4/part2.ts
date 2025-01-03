
const FORWARDS="MAS";
const BACKWARDS="SAM";
const MID=FORWARDS[Math.floor(FORWARDS.length/2)];


async function main() {
  const table=await parse(new URL("./input.txt",import.meta.url));
  let count=0;
  for(let i=1;i<table.length-1;i++) {
    const row=table[i];

    for(let j=1;j<row.length-1;j++) {
      if(row[j]!=MID) {
        continue;
      }

      const diagonal1=table[i-1][j-1] + row[j] + table[i+1][j+1];
      const diagonal2=table[i-1][j+1] + row[j] + table[i+1][j-1];

      if(matched_by_both_diagonal(diagonal1,diagonal2)) {
        count++;
      }
    }
  }

  console.log(count);
}

/// char array
function matched_by_both_diagonal(diagonal1: string,diagonal2: string) {
  const fmt1=corresponding_fmt(diagonal1[0]);
  const fmt2=corresponding_fmt(diagonal2[0]);

  for(let i=0;i<diagonal1.length;i++) {
    if(diagonal1[i]!=fmt1[i] || diagonal2[i]!=fmt2[i]) {
      return false;
    }
  }

  return true;
}

/// just a char
function corresponding_fmt(first: string) {
  return first==FORWARDS[0]?FORWARDS:BACKWARDS;
}

async function parse(path: string|URL) {
  const file=await Deno.readTextFile(path);
  return file.split('\n');
}


if(import.meta.main) await main();


