import Memes from "../../components/memes";

export default async function VotePage(){
  let data = []
  try {
    data = await fetch(`${process.env.BASE_URL}/api/list`).then(res => res.json())
  } catch (error) {
    data = []
  }

  return (
    <>
    <Memes data={data} />
    </>
  )
}