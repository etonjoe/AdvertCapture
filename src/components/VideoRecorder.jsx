import React, { useRef, useState } from 'react';

const VideoRecorder = ({ setVideoBlob }) => {
  const previewRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [playbackURL, setPlaybackURL] = useState('');
  let mediaRecorder;
  let chunks = [];

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      previewRef.current.srcObject = stream;
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setVideoBlob(blob);
        setPlaybackURL(URL.createObjectURL(blob));
        stream.getTracks().forEach(track => track.stop());
        chunks = [];
      };
      mediaRecorder.start();
      setRecording(true);
    });
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  return (
    <>
      <video ref={previewRef} autoPlay muted style={{ display: recording ? 'block' : 'none' }} />
      <button onClick={startRecording} disabled={recording}>🎥 Start Recording</button>
      <button onClick={stopRecording} disabled={!recording}>🛑 Stop</button>
      {playbackURL && (
        <video src={playbackURL} controls />
      )}
    </>
  );
};

export default VideoRecorder;
