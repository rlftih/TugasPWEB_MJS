//Buat 2 function di dalam satu file bernama config.mjs, function pertama returnnya adalah array dengan 5 elemen, tiap index array adalah function yang berkaitan dengan nama function, function kedua returnnya adalah object dengan 5 property, tiap property adalah function yang berkaitan dengan nama property.
//Panggil kedua function di dalam satu file bernama main.mjs, lalu panggil semua function yang ada di dalam kedua function tersebut menggunakan masing-masing cara pemanggilan array atau objek.

export function buatDaftarFungsi() {
    return [
        function () {
            console.log("Fungsi ke-1 yang ada di dalam Array");
        },
        function () {
            console.log("Fungsi ke-2 yang ada di dalam Array");
        },
        function () {
            console.log("Fungsi ke-3 yang ada di dalam Array");
        },
        function () {
            console.log("Fungsi ke-4 yang ada di dalam Array");
        },
        function () {
            console.log("Fungsi ke-5 yang ada di dalam Array");
        }
    ];
}

export function buatKumpulanFungsi() {
    return {
        satu: function () {
            console.log("Fungsi satu yang ada di dalam Object");
        },
        dua: function () {
            console.log("Fungsi dua yang ada di dalam Object");
        },
        tiga: function () {
            console.log("Fungsi tiga yang ada di dalam Object");
        },
        empat: function () {
            console.log("Fungsi empat yang ada di dalam Object");
        },
        lima: function () {
            console.log("Fungsi lima yang ada di dalam Object");
        }
    };
}