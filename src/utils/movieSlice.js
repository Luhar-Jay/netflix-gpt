import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null },
  reducers: {
    addNowMoviePlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowMoviePlaying } = movieSlice.actions;

export default movieSlice.reducer;
