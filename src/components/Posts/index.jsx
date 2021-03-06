import P from 'prop-types';
import './styles.css';
import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} cover={post.cover} body={post.body} id={post.id} />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.array,
};
