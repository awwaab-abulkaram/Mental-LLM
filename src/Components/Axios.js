import React, { useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip
} from 'chart.js';
import Navbar1 from './Navbar';
import './Axios.css'; // Import custom CSS


// Register necessary components
ChartJS.register(ArcElement, Tooltip);

const MentalHealthPredictor = () => {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [multiclassPrediction, setMulticlassPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetch binary model prediction
      const binaryResponse = await axios.post('http://localhost:5500/predict/stress', { text });
      setPrediction(binaryResponse.data);
      
      // Fetch multiclass model prediction
      const multiclassResponse = await axios.post('http://localhost:5500/predict/multiclass', { text });
      setMulticlassPrediction(multiclassResponse.data);
      
      setError(null);
    } catch (err) {
      console.error('Error fetching predictions:', err);
      setError('Failed to fetch predictions. Please try again.');
    }
  };

  const pieData = prediction ? {
    labels: ['Confidence Score'],
    datasets: [{
      data: [prediction['Severity Score'] * 10, 100 - prediction['Severity Score'] * 10],
      backgroundColor: ['#30638E', '#ddd'],
    }],
  } : null;
  return (
    <div className='axios'>
      <Navbar1 />
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="textInput" className="form-label">
              <h1>How are you feeling today?</h1>
            </label>
            <textarea
              id="textInput"
              className="form-control"
              value={text}
              onChange={handleInputChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-custom">Predict Now</button>
        </form>
        {error && <div className="alert alert-danger mt-4">{error}</div>}
        {prediction && (
          <div className="mt-4">
            <div className="row">
              <div className="col-md-6">
                <div className="card-custom">
                  <div className="card-body-custom">
                    <h5 className="card-title-custom">Stress Detector</h5>
                    <p className="card-text-custom">{prediction['Disorder Present']}</p>
                  </div>
                </div>
                {prediction && (
                  <div className="card-custom mt-4">
                    <div className="card-body-custom">
                      <h5 className="card-title-custom">Confidence Score</h5>
                      <p className="card-text-custom">
                        {prediction['Severity Score'] !== undefined 
                          ? prediction['Severity Score'].toFixed(2) 
                          : 'Not available'}
                      </p>
                      {pieData && (
                        <div className="chart-container" style={{ maxWidth: '200px', margin: '0 auto' }}>
                          <Pie data={pieData} width={200} height={200} />
                        </div>
                      )}
                      <p className='confi-text'>
                        * Confidence Score provides insights into how certain the model is about it's individual predictions
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <div className="card-custom">
                  <div className="card-body-custom">
                    <h5 className="card-title-custom">Recommendations</h5>
                    <p className="card-text-custom">
                      {prediction ? "Here are some recommendations based on your input." : "No recommendations available."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {multiclassPrediction && (
          <div className="mt-4">
            <div className="row">
              <div className="col-md-12">
                <div className="card-custom">
                  <div className="card-body-custom">
                    <h5 className="card-title-custom">Depression Level</h5>
                    <p className="card-text-custom">
                      Your text was found to contain a level of {multiclassPrediction['Disorder']} depression.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentalHealthPredictor;
