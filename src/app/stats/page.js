import { StatsBar } from '@/components/Chart'
import "./stats.css"
import Image from 'next/image'
import { SantanderLogo } from '@/components/Logo'
import { redirect } from 'next/navigation'

const Stats = async () => {
  let data = []
  
  try {
    data = await fetch(`${process.env.BASE_URL}/api/votes`,{
      cache: "no-store"
    }).then(res => res.json()) 
  } catch (error) {
    data = []
  }

  if (data?.votes?.reduce((total, number) => total + number, 0) >= 150) {
    redirect("/final?winner="+data?.image[0])
  }

  return (
    <section className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
      <section className='container_sec flex flex-col'>
        <h1 className='lucky text-2xl lg:text-4xl text-center'>Los Memes mas votados</h1>
        <div className="container_stats w-full xl:max-w-screen-xl">
        <StatsBar data={data}/>
        </div>
      </section>

      <div className='flex flex-col items-center p-5 rounded-2xl border h-fit lucky text-3xl'>
        Votos: {data?.votes?.reduce((total, number) => total + number, 0) || 0}
        <Image
          className='w-full max-w-lg mt-2'
          src="/gif/silvester_anxiety.gif"
          width={512}
          height={512}
          alt='Silvestre tomando cafe'
        />

        <div className='flex items-center justify-around gap-10 mt-5'>
          <Image
            className='w-full max-w-[240px]'
            src="/img/pescar.png"
            width={256}
            height={256}
            alt='Fundación Pescar'
          />

          <SantanderLogo styles="w-full max-w-[240px]" />
        </div>
      </div>
    </section>
  )
}

export default Stats