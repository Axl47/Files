let bouncer = function( agesAndBribes ){
let minimumAge = 18;
let agesIn = [];
let agesOut = [];

for (var i = 0; i < agesAndBribes.length; i++) {
  if (agesAndBribes[i] [0] >= minimumAge) {
    agesIn.push(agesAndBribes[i] [0]);
    console.log(agesIn);
  } else {
    if ( agesAndBribes[i] [1] > 0 ) {
      agesIn.push(agesAndBribes[i] [0]);
      console.log(agesIn);
    } else {
      agesOut.push(agesAndBribes[i] [0]);
      console.log(agesOut);
    }
  }
}

let Lists = [agesIn, agesOut];

return lists;


}

let enter = [18, 14, 11, 26]

let result = bouncer(enter, 4)
