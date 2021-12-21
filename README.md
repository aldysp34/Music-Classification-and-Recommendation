# **Music Genre Classification and Recommendation Song**
_Capstone_ MBKM SIB Dicoding Tim CSD-109. Tujuan proyek ini untuk mengklasifikasikan genre dari audio musik menggunakan _deep learning dan memberikan lagu yang serupa dengan genre dari audio tersebut.

## **Dataset**
Data yang digunakan pada proyek ini adalah [GTZAN Dataset](https://www.kaggle.com/andradaolteanu/gtzan-dataset-music-genre-classification).
> Dataset terdiri dari 1000 track audio,  masing-masing berdurasi 30 detik dan berisi 10 genre, masing-masing diwakili oleh 100 lagu. Semua track adalah audio 16-bit Mono 22050Hz dalam format `.wav`.

10 genre dalam Dataset : 
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
`run_model/mussic_clasification.ipynb`

## **Exploratory Data Analysis**
Penjelasan mengenai data pada proyek ini ditemukan di<br>
`run_model/exploratory_data_analysis.ipynb`

## **Local Deployment**
1. Buka folder project di text editor seperti VSC, PyCharm
2. Buka file capstone -> app.py
3. Buka terminal app.py
4. Install beberapa hal berikut:
- environment : `pip install virtualenv`
- create enviroment : `virtualenv env_capstone`
- requirement : `pip install-r requirement.txt`
5. Setelah instalasi selesai, etik perintah `python.exe app.py` pada terminal.
6. Tunggu hingga muncul link localhost deployment, klik link tersebut.

# **Modeling**
Pada proyek ini, kami menggunakan Deep Learning untuk membuat model klasifikasi. Kami menggunakan TensorFlow untuk membangun Neural Networks.
1. Extraksi Fitur MFCC (Mel Frequency Coefisient )
<!-- Since librosa provided buildt-in function for extracting MFCCs. The work is only to try the parameters that works for the project. In this project, the params are:
signal: the audio load from dataset
sample_rate: 22050 (default)
n_mfcc: 13 (default was 20)
n_ftt: 2048 (default)
hop_length: 512 (default)
The extracted MFCCs are then labeled and dumped into data.json for the ease of using.

2. Create the neural network
With the help of tensorflow.keras, the network is built as:
3 convolutional layers:
Conv2D: 2D convolutional layer
Maxpooling2D: help extracts the sharpest features
BatchNormalization(): speed up training and more reliable model
Dense layer:
Flatten(): convert from 2D to 1D layer
Dropout(): improve network robustness (network can rely too much on specific neuron)
Output layer

3. Prepare the data
Split the data into:
train set: 80% of the dataset
test set: 20% of the dataset

4. Train the data with CNN model
The model is compiled with:
optimizer: Adam optimizer (stochastic gradient descent method)
learning_rate: 0.0001 (tried to avoid overfitting)
loss: categorical_crossentropy (as classes is mutually exclusive and samples can have soft probabilities labels)
metrics: accuracy (as we use accuracy to evaluate the performance of the model)

5. Evaluate the model
The model is evaluated by train/test accuracy and train/test loss. The figure is plotted to illustrate whether the model is suffering from overfitting or underfitting. -->

# **Referensi**
<!-- 1. [Template](https://startbootstrap.com/theme/grayscale) -->
2. [Home Picture](https://unsplash.com/photos/7LNatQYMzm4) (Photo by @icons8)
3. [Music-genre-classifier](https://github.com/0sparsh2/Music-genre-classifier)
4. [GTZAN Dataset - Music Genre Classification using Python](https://www.youtube.com/watch?v=2mCfP6mpQpo&t=2s)