# AI-Powered Sentiment Analysis Tool

The **AI-Assisted Sentiment Analysis Tool** is a full-stack web application designed to interpret and analyze textual data using artificial intelligence. This tool identifies the sentiment behind any given text, providing valuable insights that can optimize decision-making, refine strategies, and drive informed outcomes.

## Table of Contents

- [Features](#features)
- [Technology Stack](#Technology-Stack)
- [Installation](#installation)
- [Usage](#usage)
- [Use Cases](#Use-Cases)
- [License](#license)

## Features

- **Instant Sentiment Analysis**: Quickly analyze any text to determine if the sentiment is positive, negative, or neutral.
- **Modern and Intuitive UI**: A sleek, user-friendly interface that ensures a seamless experience.
- **Real-time Feedback**: Get immediate results with our AI-driven engine.
- **Data Storage**: Automatically stores analyzed texts and their results for future reference.
- **Extensible Backend**: Built with Flask, making it easy to extend and integrate with other services.
- **Responsive Design**: Fully responsive and optimized for all devices, ensuring you can access the tool wherever you are.

## Technology Stack

**Frontend**: React.js, Material-UI, Styled Components
**Backend**: Flask, Python, SQLAlchemy
**Database**: SQLite
**Sentiment Analysis Engine**: TextBlob

## Installation

To get this application up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have the following installed:

- **Python 3.x**
- **Node.js & npm**
- **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/sentiment-analysis-tool.git
cd sentiment-analysis-tool
```
### Step 2: Set Up the Backend

Navigate to the `backend` directory and create a virtual environment:

```bash
cd backend
python -m venv venv
source venv/bin/activate OR venv\Scripts\activate #if Windows 
```

Install the required Python packages:

```bash
pip install -r requirements.txt
```

Run the Flask server:

```bash
python app.py 
```

### Step 3: Set Up the Frontend 

Navigate to the `client` directory 

```bash
cd client
```

Install npm:

```bash
npm install 
```

Run the React server:

```bash
npm start
```

Note: the application should automatically open via http://localhost:3000.

## Usage

1. Open the application in your browser.
2. Enter the text you wish to analyze in the provided text area.
3. Click the "Analyze Sentiment" button.
4. Instantly see whether the sentiment is Positive, Negative, or Neutral.

## Use Cases

- **Customer Feedback Analysis**: Understand what your customers think about your products or services.
- **Social Media Monitoring**: Gauge public opinion on social platforms in real time.
- **Market Research**: Quickly analyze large volumes of text data for market insights.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.