import EditMemes from "../../components/editmemes";

export default async function Editar(){
  const data = await fetch(`${process.env.BASE_URL}/api/list`,{
    cache: "no-cache"
  }).then(res => res.json())

  if (!data) {
    return <p>Sin Datos Cargados</p>
  }

  return (
    <>
    <EditMemes data={data} />
    </>
  )
}