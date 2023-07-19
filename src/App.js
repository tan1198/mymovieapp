
import './App.css';
import './MovieDetail.css'
import HomePage from './pages/Home';
import PopularMovie from './pages/Movies/PopularMovie';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';
import TopMovie from './pages/Movies/TopMovie';
import UpComingMovie from './pages/Movies/UpComingMovie';
import NowPlayingMovie from './pages/Movies/NowPlayingMovie';
import SearchPage from './pages/Movies/Search';
import MoviePage from './pages/Movies/MoviePage';
import MovieWatchPage from './pages/Movies/MovieWatchPage';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from './store/auth-slice';
import { useEffect, useState } from 'react';
import { auth, db } from './FireBase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { userAction } from './store/user-slice';
import MyInfo from './pages/MyInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    //loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'toprated',
        element: <TopMovie />,
      },
      {
        path: 'upcoming',
        element: <UpComingMovie />,

      },
      {
        path: 'popular',
        element: <PopularMovie />,

      },
      {
        path: 'nowplaying',
        element: <NowPlayingMovie />,

      },
      {
        path: 'search',
        element: <SearchPage />,

      },
      {
        path: 'movie',
        element: <MoviePage />
      },
      {
        path: 'watch',
        element: <MovieWatchPage />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: 'myinfo',
        element: <MyInfo />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch()
  const[movie,setmovie] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0'
    }
  };
  
  // 4 api này call ra 4 danh sách phim khác nhau tùy theo 4 key word [now_playing,popular,top_rated,upcoming]
 useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    console.log('then',response.results)
    setmovie(response.results)
  })
  .catch(err => console.error(err));
 },[])

    console.log('out',movie)
  useEffect(() => {
    const getUserData = async (Ref) => {

      const docSnap = await getDoc(Ref);
      const userData = docSnap.data()
      if (docSnap.exists()) {
        console.log('snap', docSnap.data())
        dispatch(userAction.setHistoryListFromFireBase(userData.HistoryList))
        dispatch(userAction.setWatchListFromFireBase(userData.WatchList))
      } 

    }
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(authAction.setUserInfo(currentUser));
      } else {
        dispatch(authAction.setUserInfo(""));
      }
    });
    if(auth.currentUser)
    {
      const Ref = doc(db, "usersdata", auth.currentUser.email);
      getUserData(Ref)
    }



  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
