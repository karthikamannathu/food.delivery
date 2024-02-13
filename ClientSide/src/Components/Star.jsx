import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStarCount } from '../Redux/Star_Rating/starCounterSlice';

const StarRatingDisplay = ({ starValue }) => {
  const dispatch = useDispatch();
  const starCount = useSelector((state) => state.star.starCounts[starValue] || 0);

  useEffect(() => {
    // Dispatch the star count when the component mounts
    dispatch(setStarCount({ starValue, newCount: starValue }));
  }, [dispatch, starValue]);

  const stars = Array.from({ length: starCount }, (_, index) => <span key={index}>⭐</span>);

  return (
    <div>
    
      {stars}
    </div>
  );
};

export default StarRatingDisplay;
