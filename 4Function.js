// Challenge 4

function cekStatusNilai(skor) {

    if (skor >= 75) {
        return 'Lulus';
    } else if (skor <= 75){
        return 'Tidak Lulus';
    } else {
        return 'Nilai Kamu Tidak Ada';
    }
};

const hasil = cekStatusNilai(60);

console.log(hasil);


