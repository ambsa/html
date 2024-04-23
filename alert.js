window.onload = function() {
    // Cek apakah alert sudah pernah ditampilkan sebelumnya
    var isAlertShown = sessionStorage.getItem('alertShown');

    if (!isAlertShown) {
        var pesan = "Anda Telah Mencapai Dashboard.";
        var alertBox = document.createElement("div");
        alertBox.className = "custom-alert";
        alertBox.textContent = pesan;

        var closeButton = document.createElement("button");
        closeButton.textContent = "OK";
        closeButton.onclick = function() {
            // Setelah tombol OK ditekan, alert ditutup dan status disimpan
            document.body.removeChild(alertBox);
            sessionStorage.setItem('alertShown', 'true');
        };
        alertBox.appendChild(closeButton);

        document.body.appendChild(alertBox);
    }
    
    alert('Selamat Datang');
    var nama = prompt('masukkan nama:');
    alert('Halo ' + nama);
};
