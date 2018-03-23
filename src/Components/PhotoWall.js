import React from 'react'
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PhotoWall = (props) => {
  return (
    <div>
      <Link to="/AddPhoto" className="add-icon"></Link>
    <div className="photo-grid">
        {props.posts
        .sort((x, y) => y.id - x.id)
        .map((post, index) => 
          <Photo 
            key={post.id}
            post={post}
            index= {index}
            {...props} 
            />
          )
        }
      </div>
    </div>
  )
}


PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired

}

export default PhotoWall;