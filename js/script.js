document.addEventListener("DOMContentLoaded", function() {
    // mendapatkan elemen-elemen yang diperlukan<diambil berdasarkan id>
    const calculateButton = document.getElementById("calculate-button");
    const resetButton = document.getElementById("reset-button");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultText = document.querySelector(".container-result h1");
    const categoryText = document.getElementById("bmi-category");
    const descriptionText = document.getElementById("bmi-description");
    const saranDiv = document.querySelector(".saran");

    // menyimpan teks saran di awal
    const defaultSaran = saranDiv.innerHTML;

    // menambahkan event listener untuk tombol hitung
    calculateButton.addEventListener("click", function() {
        // mendapatkan nilai berat badan dan tinggi badan dari input
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // konversi tinggi dari cm ke meter

        // melakukan perhitungan BMI
        const bmi = weight / (height * height);

        // menampilkan hasil BMI
        resultText.textContent = bmi.toFixed(1);

        // menentukan kategori berat badan
        let category, description, saran, diseases;
        if (bmi < 18.5) {
            category = "Berat Badan Kurang";
            description = "Hasil BMI antara 0 dan 18.5";
            saran = "Anda berada dalam kategori berat badan kurang. Saran: Untuk meningkatkan berat badan, pertahankan pola makan yang sehat dan konsumsi makanan bergizi lebih banyak.";
            diseases = ["Anemia", "Masalah tulang", "Gangguan reproduksi"];
        } else if (bmi < 24.9) {
            category = "Berat Badan Normal";
            description = "Hasil BMI antara 18.5 dan 24.9";
            saran = "Berat badan Anda berada dalam kisaran normal. Pertahankan pola makan yang sehat dan rutin berolahraga untuk menjaga kesehatan.";
            diseases = [];
        } else if (bmi < 29.9) {
            category = "Berat Badan Berlebih";
            description = "Hasil BMI antara 24.9 dan 29.9";
            saran = "Anda berada dalam kategori overweight atau berat badan berlebih. Saran: Menurunkan berat badan adalah kunci untuk meningkatkan kesehatan. Atur pola makan dan rutin berolahraga.";
            diseases = ["Diabetes", "Hipertensi", "Sakit Jantung", "Osteoarthritis"];
        } else {
            category = "Obesitas";
            description = "Hasil BMI di atas 29.9";
            saran = "Anda berada dalam kategori obesitas. Saran: Segera konsultasikan dengan dokter atau ahli gizi untuk merencanakan program penurunan berat badan yang aman.";
            diseases = ["Diabetes", "Hipertensi", "Sakit Jantung", "Osteoarthritis", "Apnea tidur", "Kanker"];
        }

        // menampilkan kategori berat badan, deskripsi, dan saran
        categoryText.textContent = category;
        descriptionText.textContent = description;
        saranDiv.innerHTML = saran; // Memperbarui teks saran

        // menampilkan daftar penyakit jika ada
        const diseaseContainer = document.querySelector(".result-penyakit");
        diseaseContainer.innerHTML = ""; // mengosongkan konten sebelum menambahkan yang baru
        if (diseases.length > 0) {
            const diseaseTitle = document.createElement("h4");
            diseaseTitle.textContent = "Beberapa penyakit yang berkaitan:";
            diseaseContainer.appendChild(diseaseTitle);

            diseases.forEach(function(disease) {
                const diseaseParagraph = document.createElement("p");
                const centerTag = document.createElement("center");
                centerTag.textContent = disease;
                diseaseParagraph.appendChild(centerTag);
                diseaseContainer.appendChild(diseaseParagraph);
            });
        }
    });

    // menambahkan event listener untuk tombol reset
    resetButton.addEventListener("click", function() {
        // mengosongkan nilai input dan hasil BMI
        weightInput.value = "";
        heightInput.value = "";
        resultText.textContent = "0";
        categoryText.textContent = "-";
        descriptionText.textContent = "-";
        saranDiv.innerHTML = defaultSaran; // mengembalikan teks saran ke nilai awal
        const diseaseContainer = document.querySelector(".result-penyakit");
        diseaseContainer.innerHTML = ""; // mengosongkan daftar penyakit
    });
});
