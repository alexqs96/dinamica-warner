import Memes from "../../components/memes";

export default async function VotePage(){

  const data = await fetch(`${process.env.BASE_URL}/api/list`,{
    cache: "no-cache"
  }).then(res => res.json())

  return (
    <>
    <Memes data={data || []} />
    </>
  )
}