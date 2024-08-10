import React, { useState } from 'react';
import SentimentForm from './components/SentimentForm';
import SentimentResult from './components/SentimentResult';
import { Container, Typography, Box } from '@mui/material';
import styled from 'styled-components';

const AppContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const App = () => {
  const [sentiment, setSentiment] = useState('');

  return (
    <AppContainer>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
          AI-Powered Sentiment Analysis
        </Typography>
        <SentimentForm setSentiment={setSentiment} />
        <SentimentResult sentiment={sentiment} />
      </Container>
    </AppContainer>
  );
};

export default App;