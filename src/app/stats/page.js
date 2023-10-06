import { StatsBar } from '@/components/Chart'
import "./stats.css"

const Stats = async () => {
  let data = []
  
  try {
    data = await fetch(`${process.env.BASE_URL}/api/votes`,{
      cache: "no-store"
    }).then(res => res.json()) 
  } catch (error) {
    data = []
  }

  return (

    <section className='container_sec flex flex-col'>
      <h1 className='lucky text-2xl lg:text-4xl text-center'>Los Memes mas votados</h1>
      <div className="container_stats w-full xl:max-w-screen-xl">
      <StatsBar data={data}/>
      </div>
    </section>
  )
}

export default Stats