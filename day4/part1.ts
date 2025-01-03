
const FORWARDS="XMAS";
const BACKWARDS="SAMX";


async function main() {
  const table=await parse(new URL("./input.txt",import.meta.url));
  let count=0;
  for(let i=0;i<table.length;i++) {
    const row=table[i];
    for(let j=0;j<row.length;j++) {
      const format=row[j]==FORWARDS[0]?FORWARDS:row[j]==BACKWARDS[0]?BACKWARDS:null;
      if(format==null) {
        continue;
      }

      if(matches_horizontally(row,j,format)) {
        count++;
      }

      if(matches_vertically(table,i,j,format)) {
        count++;
      }

      if(matches_diagonally_right(table,i,j,format)) {
        count++;
      }

      if(matches_diagonally_left(table,i,j,format)) {
        count++;
      }

    }
  }

  console.log(count);
}


function matches_horizontally(row: string,cursor: number,format: string) {
  let i;
  for(i=0;i<format.length && i+cursor<row.length;i++) {
    if(row[i+cursor]!=format[i]) {
      return false;
    }
  }

  return i==format.length;
}

function matches_vertically(table: string[],row_cursor: number,col_cursor: number,format: string) {
  let i;
  for(i=0;i+row_cursor<table.length && i<format.length;i++) {
    if(table[row_cursor+i][col_cursor]!=format[i]) {
      return false;
    }
  }

  return i==format.length;
}

function matches_diagonally_right(table: string[],row_cursor: number,col_cursor: number,format: string) {
  let i;
  for(i=0;i+row_cursor<table.length && i+col_cursor<table[i].length && i<format.length;i++) {
    if(table[i+row_cursor][i+col_cursor]!=format[i]) {
      return false;
    }
  }

  return i==format.length;
}

function matches_diagonally_left(table: string[],row_cursor: number,col_cursor: number,format: string) {
  let i,j;
  for(i=0,j=0;i+row_cursor<table.length && i<format.length && j+col_cursor>=0;i++,j--) {
    if(table[i+row_cursor][j+col_cursor]!=format[i]) {
      return false;
    }
  }

  return i==format.length && Math.abs(j)==format.length;
}

async function parse(path: string|URL) {
  const file=await Deno.readTextFile(path);
  return file.split('\n');
}


if(import.meta.main) await main();


