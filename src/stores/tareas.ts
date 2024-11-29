import { defineStore } from "pinia";


interface IState{
  items: ITarea[],
  current_item: ITarea | null
}

const api_base = `${process.env.VUE_APP_API_URL}`
const api_name = "tareas"

export const useTareasStore = defineStore(api_name, {
  state: ():IState=>({
    items: [],
    current_item: null
  }),
  actions: {
    async getApiTareas(){
        console.log("entro a llamar a la Api")
        const {data, error} = await useFetch('/api/'+api_name, {method: 'GET'})
        this.items = (data.value as any)
    },
    async obtenerPeliculas(){
        console.log("entro a listar")
        if(this.items.length == 0){
            await this.getApiTareas()
        }else{
            return this.items
        }
    },
    async agregar(body:{titulo: string, descripcion: string, estado: number}){
        console.log("entro a agregar")
        const {data, error} = await useFetch('/api/'+api_name,{
            method: 'POST',
            body
        })
        console.log("entro a crear", data.value)

        console.log("porque no entre")
        console.log("value", data.value)
        console.log("items actuales", data.value)
        this.items = [...this.items, data.value as ITarea];
        console.log("items", this.items)
      

        navigateTo('/')      
    },
    async actualizar(body:ITarea){
      const {data, error} = await useFetch('/api/actualizar-pelicula',{
        method: 'PATCH',
        body
      })
      navigateTo('/')      
    },
    async update(body:ITarea){
        const {data, error} = await useFetch('/api/actualizar-pelicula',{
          method: 'PATCH',
          body
        })
        navigateTo('/')      
      },
    async eliminar(id:number){
      const {data, error} = await useFetch(`/api/`+api_name+`/${id}`,{
        method: 'DELETE'
      })
      this.items = this.items.filter(x => x.id !== id) 
    },
    setPeliculaActual(item:ITarea | null){
      this.current_item = item
    }
  }
})