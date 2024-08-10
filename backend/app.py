from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sentiments.db'
db = SQLAlchemy(app)

class Sentiment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(500), nullable=False)
    sentiment = db.Column(db.String(20), nullable=False)

# Create the database tables within the application context
with app.app_context():
    db.create_all()

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    text = data['text']
    blob = TextBlob(text)
    sentiment = blob.sentiment.polarity
    result = 'Positive' if sentiment > 0 else 'Negative' if sentiment < 0 else 'Neutral'
    new_sentiment = Sentiment(text=text, sentiment=result)
    db.session.add(new_sentiment)
    db.session.commit()
    return jsonify({'sentiment': result})

if __name__ == '__main__':
    app.run(debug=True)