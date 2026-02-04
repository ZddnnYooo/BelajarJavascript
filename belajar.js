// Challenge Object 

const personality = {
    name: 'Akhmad Zidan Ramadhan' ,
    age: 19,
    dayOfBirth: 2006,
    pekerjaan: false,
};

const text = personality.name + ' Lahir pada tahun ' + personality.dayOfBirth;

console.log(text);

// Challenge array

const username = [
    "yandy",
    'dimas',
    'mita',
];

const teks = 'Ada total ' + username.length + ' username. ';
const newUsername = '';
const takeUser = username.includes(newUsername);

if (takeUser){
    console.log('Username sudah digunakan');
} else {
    console.log('Username tersedia');
}

const myFavoriteFood = [
    'Bakso',
    'Sabana',
    'Mie Ayam',
];

const textk = 'Makanan favoritku yang kedua adalah ' + myFavoriteFood[1];
console.log(textk);

// Undefined & Null

const typeShoes = 'Adidas';
const typeBicycle = null;
const typeMotorcycle = null;
const typeCar = null;
const typeBoat = null;
const typeAirplance = null;

console.log(typeof typeShoes);

// Function

function sayMyName() {
    console.log('Akhmad Zidan Ramadhan');
};

sayMyName();

function numberTest(Number) {
    console.log(Number);
if (Number > 0 ) {
    console.log('positif');
} else if (Number < 0) {
    console.log('negatif');
} else {
    console.log('netral');
}

}

numberTest(0)

function calculation(x, y) {
    const z = x + y
    console.log(x + ' Ditambah ' + y + ' sama dengan ' + z);
};

calculation(2000, 50);

// Scope and Return

// const a = 'a';

// function x() {
//     console.log(a);
// }

// x();

// if (true) {
//     const a = 'a';

// };

// console.log(a);

// function x() {
//     const a = 'a';
//     if (true) {
//         console.log(a);
//     };
// };

// x();

// ini buat sendiri

const angkaSatu = 8
const angkaDua = 8

function perkalianAngka(angkaSatu, angkaDua) {
    const perkalianJumlah = angkaSatu * angkaDua;
    return perkalianJumlah;
}

const perkalianJumlah = perkalianAngka(angkaSatu, angkaDua);

console.log(perkalianJumlah);

// ini agung hapsah

function gabunganPerkalian(a, b) {
    return a * b;
}

const hasilPerkalian = gabunganPerkalian(10, 10);

console.log(hasilPerkalian);


// ArrowFunction

const sayBye = (sayByeName) => {
    console.log ('Bye, ' + sayByeName);
};

sayBye('zidan');

const add = (x, y) => {
    return x * y;
}

const z = add(8, 8);

console.log(z);

const duaArgumen = (nama, umur) => nama + ' adalah umur ' + umur;

console.log(duaArgumen('zidan', 19));