export {}

declare global{

  interface ITarea{
    id: number
    titulo: string
    descripcion: string,
    estado: number,
    fecha_create: Date | null,
    fecha_update: Date | null,
  }

}