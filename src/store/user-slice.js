import { createSlice } from '@reduxjs/toolkit';
import { db } from '../FireBase';
import { doc, setDoc } from 'firebase/firestore'



const userSlice = createSlice({
    name: "user",
    initialState: {
        WatchList: [],
        HistoryList: [],
    },
    reducers: {
        setHistoryListFromFireBase(state, action) {
            state.HistoryList = action.payload
        },
        setWatchListFromFireBase(state, action) {
            state.WatchList = action.payload
        },


        addToWatchList(state, action) {
            const newList = state.WatchList.filter(movie => movie.movieId !== action.payload.movie.movieId);
            newList.unshift(action.payload.movie);
            state.WatchList = newList;
            setDoc(doc(db, "usersdata", action.payload.userEmail), {
                WatchList: state.WatchList,
            }, { merge: true });
        },
        removeWatchList(state, action) {
            const newList = state.WatchList.filter(movie => movie.movieId !== action.payload.movie.movieId);
            state.WatchList = newList;
            setDoc(doc(db, "usersdata", action.payload.userEmail), {
                WatchList: state.WatchList,
            }, { merge: true });
        },
        addToHistoryList(state, action) {
            const newList = state.HistoryList.filter(movie => movie.movieId !== action.payload.movie.movieId);
            newList.unshift(action.payload.movie);
            state.HistoryList = newList;
            setDoc(doc(db, "usersdata", action.payload.userEmail), {
                HistoryList: state.HistoryList,
            }, { merge: true });
        },
    },
});
export const userAction = userSlice.actions;
export default userSlice;