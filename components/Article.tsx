import * as React from 'react';
import { Post } from '../generated/posts_pb';

type ArticleProps = {
  post: Post.AsObject;
};
export const Article: React.FC<ArticleProps> = ({ post }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src={`https://picsum.photos/id/${post.id * 10}/128/128`}
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <h1 className="has-text-weight-bold is-size-5">{post.title}</h1>
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
};
