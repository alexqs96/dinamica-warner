import { StatsBar } from "@/components/Chart";

export default async function Home() {

  const data = await fetch(`${process.env.BASE_URL}/api/votes`,{
    cache: "no-store"
  }).then(res => res.json())

  return (
    <>
    <section className="">
      <StatsBar data={data}/>
    </section>

    </>
  )
}
