import Students from "@/components/Students";
import { getSheets } from "@/lib/getSheet"

export default async function Estudiantes({searchParams}){
  const data = await getSheets()

  return (
    <>
    <h1 className="text-3xl font-semibold text-center my-10">Estudiantes de Fundación Pescar Santander 2023</h1>
    <Students data={data} page={searchParams.page? searchParams.page < 1 || searchParams.page > 3? 0 : +searchParams.page -1 : 0}/>
    </>
  )
}