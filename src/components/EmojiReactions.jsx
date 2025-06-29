import React from 'react';

const EmojiReactions = ({ onReact }) => {
  const emojis = ["👍", "❤️", "😂", "🔥"];

  return (
    <div>
      {emojis.map((emoji, i) => (
        <span
          key={i}
          className="emoji"
          onClick={() => onReact(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default EmojiReactions;
