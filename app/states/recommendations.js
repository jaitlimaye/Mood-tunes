import React from 'react'

const Recommendations = () => {
  let data = [ {
    "Artist": "The Beatles",
    "Song": "Hey Jude",
    "Album_Image": "https://i.scdn.co/image/ab67616d00001e0230503dbc30e621c96913379b",
  },
  {
    "Artist" : "Michael Jackson",
    "Song" : "Billie Jean",
    "Album_Image": "https://i.scdn.co/image/ab67616d00001e024121faee8df82c526cbab2be",
  },
  {
    "Artist" : "Queen",
    "Song" : "Bohemian Rhapsody",
    "Album_Image": "https://i.scdn.co/image/ab67616d00001e025a7602f0e508660b2ba40f8c",
  },
  {
    "Artist" : "The Rolling Stones",
    "Song" : "Gimme Shelter",
    "Album_Image": "https://i.scdn.co/image/ab67616d00001e022af30c881bb23cfb82a8cf99",
  },
  {
    "Artist" : "The Who",
    "Song" : "Baba O'Riley",
    "Album_Image": "https://i.scdn.co/image/ab67616d00001e02fe24dcd263c08c6dd84b6e8c",
  }]

  const Song_display = ({data}) =>
  {
    return (
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='flex justify-center items-center h-1/3 w-full '>
          <img className='flex justify-center items-center h-full w-2/3 border-2 border-[#964EC2] rounded-xl' src={data.Album_Image}/>
        </div>
        <div className='flex-col justify-start items-center h-1/3 w-full py-4'>
          <div className='flex justify-center items-center text-xl text-[#FF7BBF] w-full'>
            {data.Song}
          </div>
          <div className='flex justify-center items-center w-full'>
            {data.Artist}
          </div>
        </div>
        
      </div>
    )
  }


  return (
    <div className='flex justify-center h-full w-full items-start p-8'>
      <div className='flex flex-col justify-center items-center h-5/6 w-2/3 rounded-3xl border-2 border-[#964EC2] mt-8'>
      <div className='flex justify-center items-start h-[15%] w-full text-3xl p-8'>
          Here are your recommendations!
        </div>
        <div className='flex flex-row justify-center items-start h-[75%] w-full'>
          {data.map((song,key) => {
            return (
              <div className='flex flex-col justify-center items-center h-full w-[20%] rounded-3xl' key={key}>
                <Song_display data={song}/>
                </div>
            )
          })}
        </div>
        
      </div>
    </div>
  )
}

export default Recommendations