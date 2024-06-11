import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Course.css';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { publicRequest } from '../../requestMethods';
import { toggleLike } from '../../redux/LikeRedux';

const Course = ({ course }) => {
  const dispatch = useDispatch();
  const likedCourses = useSelector(state => state.likes);
  const isLiked = likedCourses[course._id] || false;
  const [likesCount, setLikesCount] = useState(course.likes);

  useEffect(() => {
    setLikesCount(course.likes);
  }, [course.likes]);

  const handleLike = async () => {
    try {
      const newLikedState = !isLiked;

      // Send request to the server
      await publicRequest.put(`/courses/${course._id}/${newLikedState ? 'like' : 'unlike'}`);

      // Dispatch the toggleLike action
      dispatch(toggleLike({ courseId: course._id, isLiked: newLikedState }));

      // Update local likes count
      setLikesCount(prev => newLikedState ? prev + 1 : prev - 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='course'>
      <div className='course_thumbnail'>
        <img src={course.img} alt={course.title} className='course_image' />
      </div>
      <div className='course_info'>
        <div className='course_info_cont1'>
          <Link to={`/courses/${course._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 className='course_name'>{course.title}</h3>
          </Link>
          <h4 className='course_instructor'>{course.instructor}</h4>
        </div>

        <div className='course_info_cont2'>
          {isLiked ? (
            <FavoriteIcon style={{ color: "#914EC2", cursor: "pointer" }} onClick={handleLike} />
          ) : (
            <FavoriteBorderIcon style={{ color: "gray", cursor: "pointer" }} onClick={handleLike} />
          )}
          <h5>{likesCount}</h5>
        </div>
      </div>
    </div>
  );
};

export default Course;
