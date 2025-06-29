import React, { useState } from 'react';

const CommentBox = ({ comments, setComments }) => {
  const [text, setText] = useState('');

  const addComment = () => {
    if (text.trim()) {
      setComments([...comments, text.trim()]);
      setText('');
    }
  };

  return (
    <>
      <textarea
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addComment}>➕ Add Comment</button>
      {comments.map((c, i) => (
        <div className="comment" key={i}>💬 {c}</div>
      ))}
    </>
  );
};

export default CommentBox;
