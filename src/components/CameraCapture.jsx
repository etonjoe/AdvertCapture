import React, { useEffect, useRef } from 'react';

const CameraCapture = ({ setSnapshot }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  }, []);

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const imageData = canvas.toDataURL('image/png');
    setSnapshot(imageData);
  };

  return (
    <>
      <video ref={videoRef} autoPlay muted />
      <button onClick={takePhoto}>📷 Take Photo</button>
    </>
  );
};

export default CameraCapture;
