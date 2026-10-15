import {
    buatDaftarFungsi,
    buatKumpulanFungsi
} from "./config.mjs";

// Memanggil function pertama
const daftarFungsi = buatDaftarFungsi();

console.log("=== ISI FUNGSI DARI ARRAY ===");

daftarFungsi.forEach(function (item) {
    item();
});

// Memanggil function kedua
const kumpulanFungsi = buatKumpulanFungsi();

console.log("=== ISI FUNGSI DARI OBJECT ===");

Object.values(kumpulanFungsi).forEach(function (item) {
    item();
});