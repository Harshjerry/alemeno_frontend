// src/redux/likesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('likedCourses')) || {};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const { courseId, isLiked } = action.payload;
      state[courseId] = isLiked;
      localStorage.setItem('likedCourses', JSON.stringify(state));
    },
  }
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
