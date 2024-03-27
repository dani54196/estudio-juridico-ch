import React, { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  comment: string;
  date: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: 'John Doe', comment: 'Great product!', date: '2022-03-01' },
    { id: 2, author: 'Jane Smith', comment: 'Love it!', date: '2022-03-02' },
  ]);
  const [newComment, setNewComment] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      const newId = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
      const newDate = new Date().toISOString().split('T')[0];
      const newCommentObj: Comment = { id: newId, author: 'Anonymous', comment: newComment, date: newDate };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}</strong> - {comment.comment} ({comment.date})
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={handleInputChange}
          placeholder="Leave a comment..."
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentSection;
