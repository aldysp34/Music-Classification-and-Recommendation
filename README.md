# **Music Genre Classification and Recommendation Song**
_Capstone_ MBKM SIB Dicoding Tim CSD-109. Tujuan proyek ini untuk mengklasifikasikan genre dari audio musik menggunakan _deep learning dan memberikan lagu yang serupa dengan genre dari audio tersebut.

## **Dataset**
Data yang digunakan pada proyek ini adalah [GTZAN Dataset](https://www.kaggle.com/andradaolteanu/gtzan-dataset-music-genre-classification) dan [Spotify Top 200 Charts (2020-2021)](https://www.kaggle.com/sashankpillai/spotify-top-200-charts-20202021).
> Dataset [GTZAN Dataset](https://www.kaggle.com/andradaolteanu/gtzan-dataset-music-genre-classification) terdiri dari 1000 track audio,  masing-masing berdurasi 30 detik dan berisi 10 genre, masing-masing diwakili oleh 100 lagu. Semua track adalah audio 16-bit Mono 22050Hz dalam format `.wav`.
> Dataset [Spotify Top 200 Charts (2020-2021)](https://www.kaggle.com/sashankpillai/spotify-top-200-charts-20202021) mencakup semua lagu yang telah berada di 200 Tangga Lagu Mingguan (Global) Teratas di Spotify pada tahun 2020 & 2021. Pada proyek ini hanya memerlukan empat fitur yaitu 'Song Name', 'Artist', 'Genre', dan 'Realese Date' dari keseulurah fitur dari dataset.

10 genre dalam GTZAN Dataset : 
1. Blues
2. Classical
3. Country
4. Disco
5. Hiphop
6. Jazz
7. Metal
8. Pop
9. Reggae
10. Rock

## **Usage**
### **Feature Extraction**
_Run Notebook_ dapat ditemukan di<br>
`run_model/music_clasification_and_recommendation.ipynb`

### **Exploratory Data Analysis**
Penjelasan mengenai data pada proyek ini ditemukan di<br>
`run_model/exploratory_data_analysis.ipynb`

### **Local Deployment**
1. Buka project di text editor seperti VSC, PyCharm, dan lain-lain.
2. Buka terminal pada text editor.
3. Install beberapa hal berikut:
- _Environment_         : `pip install virtualenv`
- _Create enviroment_   : `virtualenv 'name'` (bebas)
4. Setelah _environment_ selesai dibuat, buka folder capstone dan file `app.py`
- Buka di terminal  : `cd capstone`
- Install _requirement_ : `pip install-r requirement.txt`
5. Setelah instalasi selesai, ketik perintah `python.exe app.py` pada terminal.
6. Tunggu hingga muncul link _localhost deployment_, klik link tersebut.
7. Masukkan lagu yang ingin diprediksi dengan format lagu yaitu `.wav`.

# **Modeling**
Pada proyek ini, kami menggunakan Deep Learning untuk membuat model klasifikasi. Kami menggunakan TensorFlow untuk membangun Neural Networks.
1. **Extraksi Fitur MFCC (_Mel Frequency Cepstral Coefficients_)**
Penelitian yang dilakukan oleh [(G. Jawaherlalnehru
dan S. Jothilakshmi, 2018)](https://www.semanticscholar.org/paper/Music-Genre-Classification-using-Deep-Neural-Jawaherlalnehru-Jothilakshmi/4d4c342090d771b8a9b38eca212c2b330952c28d) menyebutkan bahwa MFCC digunakan untuk merepresentasikan karakteristik musik. Oleh karena itu, pada proyek ini, untuk mengenali genre dari sebuah lagu kami menggunakan fitur MFCC. Library `librosa` menyediakan fungsi bawaan untuk mengektrasksi MFCC. Adapun parameter yang digunakan dalam proyek ini adalah:
- `sample_rate` : 22050 (default)
- `m_fcc`       : 40 (default 20)
- `n_ftt`       : 2040 (default)
- `hop_length`  : 512 (default)
- `res_type`    : kaiser_fast
Hasil ektraksi MFF kemudian diberi label dengan `LabelEncoder()`.

2. **Membangun Model Neural Network**
Dengan bantuan tensorflow, model yang dibangun atas:
- Dense layer   : Untuk menambahkan layar yang _fully connected_.
    - _units_ menandakan jumlah node yang harus ada di _hidden layer_
    - _activation_, fungsi aktivasi yang digunakan adalah relu.
- Dropout()     : Untuk mencegah terjadinya overfitting dan mempercepat proses learning.
- Output layer  : Terdiri dari 10 units karena klasifikasi pada proyek terdapat 10 genre.

3. **Persiapan Data**
Data dibagi menjadi data testing dan training.
- _Train set_   : 67% dari dataset.
- _Test set_    : 33% dari dataset.

4. **_Training_ data dengan Deep Learning**
Model dikompilasi dengan :
- _optimizer_   : `Adam`
- _loss_        : `categorical_crossentropy`
- _metrics_     : `accucary`

5. **Evaluasi Model**
Evaluasi model dengan akurasi train/test dan loss train/test. Angka tersebut diplot untuk menggambarkan apakah model mengalami _overfitting_ atau _underfitting_. Pada proyek ini model yang dihaislkan mengalami _underfitting_ yang dapat dilihat dari gambar berikut. ![plot_akurasi](https://user-images.githubusercontent.com/63992512/147046383-d2b30c06-9324-4d9d-9c4f-3f81f5b46375.png)

6. **Hasil**
![home](https://user-images.githubusercontent.com/63992512/147255105-f51f55e8-fdad-439f-a551-14aa3b52ad8d.jpg)
![predict2](https://user-images.githubusercontent.com/63992512/147255741-f45a2d0f-54c9-4917-a11a-ea04c970cda3.jpg)
![reggae](https://user-images.githubusercontent.com/63992512/147255888-602ed45f-6bf2-4fae-95ac-05f2ab5e91c2.jpg)
![rekomendasi](https://user-images.githubusercontent.com/63992512/147255999-6af5ea8b-cd2a-4416-b5dc-c1b38268f04b.jpg)
![about](https://user-images.githubusercontent.com/63992512/147255474-6b846867-85af-4ac3-8a60-dd67f9aa2159.jpg)
![footer](https://user-images.githubusercontent.com/63992512/147255537-86c70f90-38a3-44fc-88ae-849955ed081e.jpg)

# **Referensi**
1. [Music-genre-classifier](https://github.com/0sparsh2/Music-genre-classifier)
2. [Librosa](https://librosa.org/doc/latest/tutorial.html)
3. [GTZAN Dataset - Music Genre Classification using Python](https://www.youtube.com/watch?v=2mCfP6mpQpo&t=2s)
4. [Machine Learning for Audio Classification](https://www.section.io/engineering-education/machine-learning-for-audio-classification/)
5. [YOOGA – Free Yoga Website Template](https://htmlcodex.com/free-yoga-website-template)
