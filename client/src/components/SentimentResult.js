import React from 'react';
import { Typography, Box } from '@mui/material';

const SentimentResult = ({ sentiment }) => (
  <Box sx={{ mt: 4, textAlign: 'center' }}>
    {sentiment && (
      <>
        <Typography variant="h5" gutterBottom>
          Sentiment Analysis Result:
        </Typography>
        <Typography variant="h4" color={sentiment === 'Positive' ? 'green' : sentiment === 'Negative' ? 'red' : 'gray'}>
          {sentiment}
        </Typography>
      </>
    )}
  </Box>
);

export default SentimentResult;