from flask import Flask, request, render_template, jsonify
import base64
import vertexai
from vertexai.preview.generative_models import GenerativeModel, Image
import os
from dotenv import load_dotenv


load_dotenv()

app = Flask(__name__)

# Initialize Vertex AI with your project details
project_id = os.getenv('VERTEX_PROJECT_ID')
location = os.getenv('VERTEX_LOCATION')

vertexai.init(project=project_id, location=location)

def load_image_from_bytes(image_bytes: bytes) -> Image:
    return Image.from_bytes(image_bytes)

@app.route('/')
def index():
    return render_template('index.html')  # Renders the index.html file

@app.route('/submit', methods=['POST'])
def submit():
    try:
        # Receive image and text from the user
        image_file = request.files['image']
        split_instructions = request.form['text']

        # Convert the image file to an Image object
        image_bytes = image_file.read()
        loaded_image = load_image_from_bytes(image_bytes)

        # Initialize the Gemini model
        model = GenerativeModel("gemini-pro-vision")

        # Generate content using the model
        response = model.generate_content(
            [loaded_image, split_instructions]
        )
        return jsonify({"result": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
