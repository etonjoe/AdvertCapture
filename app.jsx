import React, { useState } from 'react';
import CameraCapture from './components/CameraCapture';
import VideoRecorder from './components/VideoRecorder';
import CommentBox from './components/CommentBox';
import SubmissionCard from './components/SubmissionCard';

const App = () => {
  const [submissions, setSubmissions] = useState([]);

  const handleNewSubmission = (data) => {
    setSubmissions([data, ...submissions]);
  };

  return (
    <div className="app-container">
      <h1>📸 FieldCapture</h1>
      <CameraCapture />
      <VideoRecorder />
      <CommentBox />
      <button onClick={() => handleNewSubmission(/* bundled data */)}>
        ✅ Submit
      </button>

      <h2>🗺️ Past Submissions</h2>
      {submissions.map((sub, idx) => (
        <SubmissionCard key={idx} data={sub} />
      ))}
    </div>
  );
};

export default App;
