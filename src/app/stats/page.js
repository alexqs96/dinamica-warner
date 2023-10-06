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
    <section className="container_stats">
      <StatsBar data={data}/>
    </section>
  )
}

export default Stats