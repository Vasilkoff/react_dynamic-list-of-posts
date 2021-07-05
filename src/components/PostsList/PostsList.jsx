import React, { useState, useEffect, useMemo } from 'react';
import './PostsList.scss';
import PropTypes from 'prop-types';
import { getUserPosts } from '../../api/posts';

export const PostsList = (props) => {
  const [posts, setUserPost] = useState([]);
  const [isOpen, isOpenChange] = useState([false, 0]);

  const handleChange = useMemo(() => {
    getUserPosts()
      .then((userPosts) => {
        if (userPosts && !+props.userId) {
          setUserPost(userPosts);
        } else if (userPosts) {
          setUserPost(userPosts.filter(post => post.userId === +props.userId));
        }
      });
  }, [props.userId]);

  useEffect(() => {
    handleChange();
  }, [props.userId, handleChange]);

  return (
    <div className="PostsList">
      <h2>Posts:</h2>

      <ul className="PostsList__list">
        {posts ? posts.map(post => (
          <li
            className="PostsList__item"
            key={post.id}
          >

            <div>
              <b>
                [User #
                {post.userId}
                ]:
                {' '}
              </b>
              {post.title}
            </div>
            {isOpen[0] && isOpen[1] === post.id ? (
              <button
                type="button"
                className="PostsList__button button"
                onClick={() => {
                  props.handleOpen(0);
                  isOpenChange([false, post.id]);
                }}
              >
                close
              </button>
            ) : (
              <button
                type="button"
                className="PostsList__button button"
                onClick={() => {
                  props.handleOpen(post.id);
                  isOpenChange([true, post.id]);
                }}
              >
                Open
              </button>
            )}
          </li>
        )) : `not post yet`}
      </ul>
    </div>
  );
};

PostsList.propTypes = {
  userId: PropTypes.number.isRequired,
  handleOpen: PropTypes.func.isRequired,
};