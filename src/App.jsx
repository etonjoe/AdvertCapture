import React, { useState } from 'react';
import CameraCapture from './components/CameraCapture';
import VideoRecorder from './components/VideoRecorder';
import CommentBox from './components/CommentBox';
import SubmissionCard from './components/SubmissionCard';

const App = () => {
  const [snapshot, setSnapshot] = useState('');
  const [videoBlob, setVideoBlob] = useState(null);
  const [comments, setComments] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newSubmission = {
        photo: snapshot,
        video: videoBlob,
        comments: [...comments],
        location: {
          lat: position.coords.latitude.toFixed(4),
          lon: position.coords.longitude.toFixed(4)
        },
        timestamp: new Date().toISOString()
      };
      setSubmissions([newSubmission, ...submissions]);
      setComments([]);
      setSnapshot('');
      setVideoBlob(null);
    });
  };

  return (
    <div className="app-container">
      <h1>📸 FieldCapture</h1>
      <CameraCapture setSnapshot={setSnapshot} />
      <VideoRecorder setVideoBlob={setVideoBlob} />
      <CommentBox comments={comments} setComments={setComments} />
      <button onClick={handleSubmit}>✅ Submit with Location</button>

      <h2>🗺️ Past Submissions</h2>
      {submissions.map((sub, idx) => (
        <SubmissionCard key={idx} data={sub} />
      ))}
    </div>
  );
};

export default App;
