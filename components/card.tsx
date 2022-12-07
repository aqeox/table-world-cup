/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
interface Props{
    match: Match
}
interface CardProps{
    match: Match
}

interface TeamProps{
 team:Team
}
const Team = ({team}:TeamProps)=>{
    return <div className='flex flex-col w-1/2 items-center justify-center'>

        <img alt={team?.name} src={`https://api.fifa.com/api/v3/picture/flags-sq-5/${team?.country}`} className="w-[90px h-[60px] border-[4px] border-black shadow [5px_5px_0_0_#000000]"/>
    <p className='font-bold text-lg mt-2 text-center'>{team.name}</p>
    <p className='font-bold text-2xl text-center'>{team.goals}</p>

    </div>
}

export default function card({match}:CardProps) {
  return (
    <div className='flex flex-row aspect-video border-[3px] border-black-shadow-[15px_8px_0_0_#0000000] hover:'>
    <Team team={match.home_team}/>
    <Team team={match.away_team}/>
    </div>
  )
}
