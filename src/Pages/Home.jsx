import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList';
import GlobalApi from '../Services/GlobalApi';
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGenresID from '../Components/GamesByGenresID';

const Home = () => {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName , setSelectedGenresName] = useState('Action')
  


  useEffect(() => {
    getAllGamesList()
    getGameListByGenresId(4)
  },[])

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((res) => {
      setAllGameList(res.data.results)
    
    })
  }

  const getGameListByGenresId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((res) => {
      console.log(res.data.results);
      setGameListByGenres(res.data.results)
    })
  }

  return (
    <div className='grid grid-cols-4 px-8'>
      <div className=' h-full hidden md:block'>
        <GenreList GenreId={(GenreId)=>getGameListByGenresId(GenreId)}
          selectedGenresName={(name)=>setSelectedGenresName(name)}
        />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGameList?.length>0&&gameListByGenres.length>0?
          <div>
            <Banner gameBanner={allGameList[7]} />
            <GamesByGenresID gameList={gameListByGenres} 
              selectedGenresName={selectedGenresName}
            />
            <TrendingGames gameList={allGameList} />
          </div>
          : null}
      </div>
    </div>
  )
}

export default Home;