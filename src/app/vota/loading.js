import Image from "next/image";

export default function Loading(){
  return (
    <div className="max-w-xl mx-auto text-center">
      <Image
        className="w-full h-[256px] object-contain"
        width={100}
        height={256}
        src="/gif/bugsdance.gif"
        alt="Bugs Bailando"
        priority
        unoptimized
      />
      <p className="lucky text-4xl">Cargando...</p>
    </div>
  )
}