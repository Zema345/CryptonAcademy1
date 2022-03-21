function Block(leeter, rate, used, father, code) {
  this. letter = latter;
  this. rate = rate;
  this. vsed = vsed;
  this. father = father;
  this. code = code;
}

function FindCode(blok) {

if (free[bloc.father].code != '') {
  bloc.code = tree[block.father].code + '1';
}
  else {
  if (block.letter -- tree[minIndex]. letter) {
    block.code. = '0';
  }
      else if (block.letter == tree[preminIndex].letter) {
   block.code = '1';
  }
     else {
   FindCode(tree[block.father]);
   block.code = tree[block.father]code + '0';
  }
 }
}
