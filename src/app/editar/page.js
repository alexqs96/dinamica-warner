import EditMemes from "./editmemes";

export default async function Editar(){
  const data = await fetch(`${process.env.BASE_URL}/api/list`,{
    cache: "no-cache"
  }).then(res => res.json())

  return (
    <>
    <EditMemes data={data} />
    </>
  )
}