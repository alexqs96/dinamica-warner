import { Button_Start } from "@/components/Button/Button_start";
import { StatsBar } from "@/components/Chart";
import { Qr } from "@/components/Qr/Qr";

export default async function Home() {

  const data = await fetch(`${process.env.BASE_URL}/api/votes`,{
    cache: "no-store"
  }).then(res => res.json())

  return (
    <>
    <section className="">
      <StatsBar data={data}/>
    </section>
    <Qr/>
    </>
  )
}
