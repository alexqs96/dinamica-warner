import { StatsBar } from '@/components/Chart'
import "./stats.css"

const Stats = async () => {
  const data = await fetch(`${process.env.BASE_URL}/api/votes`,{
      cache: "no-store"
    }).then(res => res.json())

  return (
    <section className="container_stats">
      <StatsBar data={data}/>
    </section>
  )
}

export default Stats