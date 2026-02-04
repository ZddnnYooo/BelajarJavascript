// Challenge 3

console.log('                                      ');
console.log('Challenge 3 Pintu Keamanan (Boolean & Logic)');
console.log('                                      ');

const passwordBenar = 'kopiHitam123';
const passwordInput = 'kopiHitam123';

const aksesDiberikan = passwordBenar === passwordInput;

if (aksesDiberikan === true) {
    console.log('Selamat datang! Pintu gudang terbuka.');
} else {
    console.log('Password Salah! Alarm Berbunyi.');
}
console.log('                                      ');
