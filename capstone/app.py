import numpy as np
import pandas as pd
from flask import Flask, render_template, request
import librosa
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import load_model
from pydub import AudioSegment

app = Flask(__name__)

spotify_df = pd.read_csv('top10s.csv', encoding="ISO-8859-1")
spotify_df.drop(['bpm', 'nrgy','pop','dnce','dB','live','val','dur','acous','spch'], axis=1, inplace=True)
spotify_df.rename(columns={'Unnamed: 0' : 'music_id'}, inplace=True )

model = tf.keras.models.load_model('model.h5')
model.make_predict_function()

@app.route('/', methods=['GET'])
def main():
    return render_template('index.html')

@app.route('/', methods=['POST'])
@app.route('/table')
def predict():
    if request.method == 'POST':
        file = request.files['file']
        def convert_to_wav(file):
            sound = AudioSegment.from_mp3(f"{file}.mp3")
            hasil = sound.export(f"{file}.wav", format="wav")
            return hasil

        file = convert_to_wav(file)
        if file:
            audio, sr = librosa.load(file)
            audio, _ = librosa.effects.trim(audio)
            audio = audio[:661500]

            mfccs_features = librosa.feature.mfcc(y = audio, sr = 22050, n_mfcc = 40)
            mfccs_mean = np.mean(mfccs_features.T, axis=0)
            mfccs_var = np.var(mfccs_features.T, axis=0)
            mfccs_scaled_features = mfccs_mean+mfccs_var
            mfccs_scaled_features = mfccs_scaled_features.reshape(1,-1)

            predicted = model.predict(mfccs_scaled_features)
            predicted_label = np.argmax(predicted, axis=1)

            if predicted_label == [[0]]:
                genre_detected = 'Blues'
            elif predicted_label == [[1]]:
                genre_detected = 'Classical'
            elif predicted_label == [[2]]:
                genre_detected = 'Country'
            elif predicted_label == [[3]]:
                genre_detected = 'Disco'
            elif predicted_label == [[4]]:
                genre_detected = 'Hip-hop'
            elif predicted_label == [[5]]:
                genre_detected = 'Jazz'
            elif predicted_label == [[6]]:
                genre_detected = 'Metal'
            elif predicted_label == [[7]]:
                genre_detected = 'Pop'
            elif predicted_label == [[8]]:
                genre_detected = 'Reggae'
            else:
                genre_detected = 'Rock'

            song = pd.DataFrame(spotify_df.loc[spotify_df['top genre'].str.contains(genre_detected)])

    return render_template('index.html', prediction = genre_detected, tables = [song.to_html(index=False)], titles=[''])
if __name__ == "__main__":
  app.run(host='0.0.0.0', port=5000, debug=True)