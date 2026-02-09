const cekPembayaran = (totalBelanja) => {
    const minimalDiskon = 500000;

    if (totalBelanja >= minimalDiskon){
        return 'Anda mendapatkan potongan harga.';
    } else if (totalBelanja < minimalDiskon) {
        return 'Harga normal, tingkatkan belanjaan anda.';
    }
};

const totalPembayaran = cekPembayaran(450000);

console.log(totalPembayaran);