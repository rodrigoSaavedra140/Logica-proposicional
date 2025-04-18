
const regex = /(¬\(([^()]|\([^()]*\))*\)|¬[^()]|\(([^()¬]|\([^()]*\))*\)|[^()¬]+)/g;

export function divideProposition (a){
    a = "%(pyq)o(poq)";
    a.split(regex);
    console.log(a)
    // hacer una funcion que separe la proposicion en proposiciones reducidas en un array
}