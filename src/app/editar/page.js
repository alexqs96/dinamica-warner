import EditMemes from "../../components/editmemes";

export default async function Editar(){
  let data = []
  
  try {
    data = await fetch(`${process.env.BASE_URL}/api/list`,{
      cache: "no-cache"
    }).then(res => res.json()) 
  } catch (error) {
    data = []
  }

  if (!data) {
    return <p>Sin Datos Cargados</p>
  }

  return (
    <>
    <EditMemes data={data} />
    </>
  )
}