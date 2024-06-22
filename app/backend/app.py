from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from pytube import YouTube
from moviepy.editor import VideoFileClip, AudioFileClip
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/download', methods=['POST'])
def download_video():
    try:
        url = request.json.get('url')
        if not url:
            return jsonify({'error': 'No URL provided'}), 400

        yt = YouTube(url)

        # Get the highest resolution video stream (without audio)
        video_stream = yt.streams.filter(progressive=False, file_extension='mp4').order_by('resolution').desc().first()

        # Get the highest quality audio stream
        audio_stream = yt.streams.filter(only_audio=True, file_extension='mp4').order_by('abr').desc().first()

        video_path = os.path.join('./downloads', 'video.mp4')
        audio_path = os.path.join('./downloads', 'audio.mp4')
        final_path = os.path.join('./downloads', 'final_video.mp4')

        video_stream.download(output_path='./downloads', filename='video.mp4')
        audio_stream.download(output_path='./downloads', filename='audio.mp4')

        # Combine video and audio using moviepy
        video_clip = VideoFileClip(video_path)
        audio_clip = AudioFileClip(audio_path)
        final_clip = video_clip.set_audio(audio_clip)
        final_clip.write_videofile(final_path, codec="libx264", audio_codec="aac")

        # Clean up the temporary files
        os.remove(video_path)
        os.remove(audio_path)

        return send_file(final_path, as_attachment=True)
    except Exception as e:
        print(f"Error: {str(e)}")  # Log the error to the console
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    if not os.path.exists('./downloads'):
        os.makedirs('./downloads')
    app.run(debug=True)
