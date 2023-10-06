import { EmailLogo, GithubLogo, LinkedinLogo } from "@/components/Logo";
import { getSheets } from "@/lib/getSheet"
import Image from "next/image";

export default async function Estudiantes(){
  const data = await getSheets()

  return (
    <>
    <h1 className="text-3xl font-semibold text-center my-10">Estudiantes de Fundación Pescar Santander 2023</h1>
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {
        data?.map((e, index) => (
          <div key={index} className="flex flex-col gap-2 border p-5 rounded-2xl font-medium">
            <Image
              className="w-full h-[320px] object-cover rounded-xl"
              src={(e.Foto? (e.Foto).includes("http")? e.Foto : "/alumnos/"+e.Foto : "/alumnos/default.jpg")}
              width={256.1}
              height={256}
              alt={e.Nombre+" "+e.Apellido}
              unoptimized
              priority
            />
            <p className="text-lg">{e.Nombre} {e.Apellido}</p>
            <div className="flex gap-2">
              {
                e.Github?
                <a href={e.Github} target="_blank" rel="noreferrer noopener" alt={"Github de "+e.Nombre+" "+e.Apellido}>
                  <GithubLogo size={24}/>
                </a>
                :
                null
              }
              {
                e.Linkedin?
                <a href={e.Linkedin} target="_blank" rel="noreferrer noopener" alt={"Linkedin de "+e.Nombre+" "+e.Apellido}>
                  <LinkedinLogo size={24}/>
                </a>
                :
                null
              }

{
                e.Correo?
                <a href={"mailto:"+e.Correo} target="_blank" rel="noreferrer noopener" alt={"Email de "+e.Nombre+" "+e.Apellido}>
                  <EmailLogo size={24}/>
                </a>
                :
                null
              }
            </div>
          </div>
        ))
      }
    </section>
    </>
  )
}