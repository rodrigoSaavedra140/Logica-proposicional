
const regex = /([^()]+|\([^)]+\)|\(|\))/g;

export function divideProposition (a){
    a = "%(pyq)o(poq)";
    a.split(regex);
    console.log(a)
}