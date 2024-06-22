from flask import Flask, request, send_file, jsonify
from pytube import YouTube
import os

app = Flask(__name__)

@app.route('/download', methods=['POST'])
def download_video():
    try:
        url = request.json.get('url')
        yt = YouTube(url)
        stream = yt.streams.get_highest_resolution()
        stream.download(output_path='./downloads', filename='video.mp4')
        return send_file('./downloads/video.mp4', as_attachment=True)
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    if not os.path.exists('./downloads'):
        os.makedirs('./downloads')
    app.run(debug=True)
