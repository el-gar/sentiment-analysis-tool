# AI-Powered Sentiment Analysis Tool

Welcome to the **AI-Powered Sentiment Analysis Tool** — a cutting-edge application designed to revolutionize how you interpret and understand textual data. With just a few keystrokes, our tool harnesses the power of artificial intelligence to discern the sentiment behind any piece of text, providing insights that can shape decisions, drive strategy, and fuel your success.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#Technology-Stack)
- [Installation](#installation)
- [Usage](#usage)
- [Use Cases](#Use-Cases)
- [License](#license)

## Introduction

In the digital age, the volume of textual data generated daily is overwhelming. Social media, product reviews, feedback forms — everywhere you look, there’s text. But what if you could instantly understand the emotions behind that text? That’s where our **AI-Powered Sentiment Analysis Tool** comes in.

Whether you’re a business looking to understand customer sentiment, a researcher analyzing survey data, or just someone curious about the emotions embedded in text, this tool is your perfect companion. Built on state-of-the-art technology, it is simple yet powerful, designed to provide immediate and accurate sentiment analysis.

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
## Step 2: Set Up the Backend

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

## Step 3: Set Up the Frontend 

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

MIT License

Copyright (c) 2024 Elijah G. 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.