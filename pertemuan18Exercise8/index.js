//Array

// let nilai = [10, 12, 14, 16, 20];
// for (let i = 0; i < nilai.length; i++ )
// { console.log("Nilai =", nilai[i] + 2); }

// console.log (nilai);

let grant = ["Grant", "DW", 20, true];
console.log(grant[grant.length - 1]);
console.log(grant);

//toString
console.log(grant.toString);
//join
console.log(grant.join(" - "));
//pop
grant.pop();
console.log(grant.join(" - "));
//push
grant.push("Hai");
grant.push("Hows Life?");
console.log(grant.join(" - "));
//shift
grant.shift();
console.log(grant.join(" - "));
//unshift
grant.unshift("Grant");
grant.unshift("Mr.");
console.log(grant.join(" - "));
//splice
grant.splice(3, 1, "Katinggolan");
console.log(grant.join(" - "));
//concat
let kim = ["Jennie", "BP" , "Seoul", true];
let park = ["ChaeYoung", "BP" , "Sydney", true];
let people = grant.concat(kim, park);
console.log(people.join(" - "));
//slice
let darryl = people.slice(0, 6);
console.log(darryl.join (" - "));
//sort
people.sort();
console.log(people.join(" - "));
//reverse
grant.reverse();
console.log(grant.join(" - "));
grant.sort().reverse();
console.log(grant.join(" - "));


