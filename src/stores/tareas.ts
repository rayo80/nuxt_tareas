import { defineStore } from "pinia";


interface IState{
  items: ITarea[],
  current_item: ITarea | null,
  api_base: string
}


export const useTareasStore = defineStore('tareas', {
  state: ():IState=>({
    items: [],
    current_item: null,
    api_base: `${process.env.BASE_URL}`+'/api/tareas'
  }),
  actions: {
    async getApiTareas(){
        console.log("entro a llamar a la Api")
        console.log("A la Api", `${this.api_base}`)
        const {data, error} = await useFetch(this.api_base, {method: 'GET'})
        this.items = (data.value as any) || []
    },
    async obtenerPeliculas(){
        console.log("entro a listar", this.items)
        if(this.items && this.items.length == 0 ){
            await this.getApiTareas()
        }else{
            return this.items
        }
    },
    async agregar(body:{titulo: string, descripcion: string, estado: number}){
        console.log("entro a agregar")
        const {data, error} = await useFetch(this.api_base,{
            method: 'POST',
            body
        })
        if (data){
            this.items = [data.value as ITarea, ...this.items];

        }
        console.log("todo estuvo bien")
        navigateTo('/')      
    },
    async actualizar(body:ITarea){
      const {data, error} = await useFetch(this.api_base+`/${body.id}`,{
        method: 'PUT',
        body
      })

      if (data){

        this.items = this.items.filter(x => x.id !== body.id) 
        this.items = [data.value as ITarea, ...this.items, ];

      }
      navigateTo('/')      
    },

    async update(id:number, body:ITarea){
        const {data, error} = await useFetch(this.api_base+`/${id}`,{
          method: 'PATCH',
          body
        })
        navigateTo('/')      
      },

    async eliminar(id:number){
      const {data, error} = await useFetch(this.api_base+`/${id}`,{
        method: 'DELETE'
      })
      this.items = this.items.filter(x => x.id !== id) 
    },

    setPeliculaActual(item:ITarea | null){
      this.current_item = item
    }
  }
})