<template>
    <VContainer class="centrar">
      <VCard width="450" class="ma-auto">
        <VCardTitle class="text-center">
          {{ titulo }} Tarea
        </VCardTitle>
        <VCardText>
            <VForm @submit.prevent="() => { console.log('Formulario enviado'); procesarFormulario(); }">
                <VTextField
                label="Titulo"
                v-model="campos.titulo"
                />
                <VTextField
                label="Descripcion"
                v-model="campos.descripcion"
                />
                <VTextField
                label="Estado"
                v-model="campos.estado"
                />
                <VBtn 
                variant="tonal"
                type="submit"
                :loading="cargando"
                block>
                Guardar
                </VBtn>
                <VBtn 
                class="mt-2"
                variant="tonal"
                color="error"
                @click="navigateTo('/')"
                :disabled="cargando"
                block>
                Cancelar
                </VBtn>
            </VForm>
        </VCardText>
      </VCard>
    </VContainer>
  </template>
  
  <script setup lang="ts">
  import { storeToRefs } from 'pinia';
  
  const cargando = ref(false);
  const peliculaStore = useTareasStore()
  const {agregar, actualizar, setPeliculaActual} = peliculaStore
  const {current_item} = storeToRefs(peliculaStore)
  
  const campos = reactive({
    titulo: current_item.value ? current_item.value.titulo : '',
    descripcion: current_item.value ? current_item.value.descripcion : '',
    estado: current_item.value ? current_item.value.estado : 1,
    fecha_create: current_item.value ? current_item.value.fecha_create: null,
    fecha_update: current_item.value ? current_item.value.fecha_update: null
  })
  
  const procesarFormulario = async()=>{
    cargando.value = true;
    if(current_item.value){
      console.log("editando")
        await actualizar({...campos, id: current_item.value.id})
    }else{
        await agregar(campos)
    }
    cargando.value = false;
  }
  
  const titulo = computed(()=> current_item.value ? 'Editar' : 'Agregar')
  
  onUnmounted(()=>{
    setPeliculaActual(null)
  })
  </script>
  
  <style scoped>
  .centrar{
    display: flex;
    align-items: center;
    height: 80vh;
  }
  </style>