# AI Receipt Splitter

## Introduction
AI Receipt Splitter is a Flask-based web application that utilizes Vertex AI's generative models to process receipt images. The application allows users to upload images of receipts and enter specific instructions for the AI to interpret and split the receipt details.

## Features
- Image upload functionality for receipts.
- Integration with Vertex AI for processing images.
- User-friendly interface for easy interaction.

## Installation

Before you begin, ensure you have Python and pip installed on your system.

1. **Clone the Repository**
   ```bash
   git clone https://github.com/raghavc/Ai-Receipt-Splitter
   cd ai-receipt-splitter

2. **Set Up Virtual Enviorment (Optional)**
   ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Install Dependencies**
    ```bash
    pip install -r requirements.txt

4. **Environment Variables**


    ```bash
    VERTEX_PROJECT_ID=your_vertex_project_id
    VERTEX_LOCATION=your_vertex_location
    ```

    Modify development.env with your personal Google Cloud Platform project ID and Location


5. **Running Application**
    ```bash
    flask run
    ```
    Access the application through http://localhost:5000 in your web browser.

## Contributions

Contributions are welcome! If you have a suggestion or enhancement, please follow these steps:

1. **Fork The Repository**

Create your own fork of the repository.

2. **Create a Branch**

    ```bash
    git checkout -b your-new-feature-branch
    ```
3. **Make Changes and Commit**

    ```bash
    git commit -am 'Add some feature'
    ```
4. **Push to the Branch**

    ```bash
    git push origin your-new-feature-branch
    ```