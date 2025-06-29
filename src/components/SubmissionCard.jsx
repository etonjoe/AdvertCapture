import React, { useState } from 'react';
import EmojiReactions from './EmojiReactions';

const SubmissionCard = ({ data }) => {
  const [reactions, setReactions] = useState([]);

  const addReaction = (emoji) => {
    setReactions([...reactions, emoji]);
  };

  return (
    <div className="submission">
      {data.photo && <img src={data.photo} alt="Captured" />}
      {data.video && <video src={URL.createObjectURL(data.video)} controls />}
      <div>📍 Lat: {data.location.lat}, Lon: {data.location.lon}</div>
      <div>🕒 {new Date(data.timestamp).toLocaleString()}</div>
      <div>
        {data.comments.map((c, i) => (
          <div className="comment" key={i}>💬 {c}</div>
        ))}
      </div>
      <EmojiReactions onReact={addReaction} />
      <div>
        {reactions.length > 0 && reactions.join(' ')}
      </div>
    </div>
  );
};

export default SubmissionCard;
