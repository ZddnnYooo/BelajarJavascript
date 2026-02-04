// Challenge 2

console.log('                                      ');
console.log('Challenge 2 Kasus kasir Toko (Number & Comparison)');
console.log('                                      ');

const kaosStussy = 100000
const pembeliMembeliKaos = 2
const totalBelanja = kaosStussy*pembeliMembeliKaos

const dapatDiskon = 50000
const totalAkhir = totalBelanja - dapatDiskon

if (totalBelanja > 250000) {
    console.log(totalAkhir);
} else {
    console.log(totalBelanja)
}
console.log('                                      ');