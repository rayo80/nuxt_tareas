

export default defineEventHandler(async (event) => {
  //const body = await readBody(event)
  return { id: 1, titulo: "Hola soy Tarea x", descripcion: "Hola soy la descripcion de la tarea", estado: 2, fecha_create: "2024-11-12", fecha_update: "2024-12-13"}

})