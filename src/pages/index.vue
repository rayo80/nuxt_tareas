<template>
    <VContainer>
      <VRow>
        <VCol>
          <VBtn 
            icon="mdi-plus"
            @click="navigateTo('/tareas_form')"
            />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VTable>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Estado</th>
                <th>Fecha de Creacion</th>
                <th>Fecha de Actualizacion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in items">
                <td>{{ i.titulo }}</td>
                <td>{{ i.descripcion }}</td>
                <td>{{ i.estado }}</td>
                <td>{{ i.fecha_create }}</td>
                <td>{{ i.fecha_update }}</td>
                <td>
                  <VBtn variant="text" color="warning" icon="mdi-eye" @click="navegarALFormulario(i)"/>
                  <VBtn variant="text" color="error" icon="mdi-delete" @click="eliminar(i.id)"/>
                </td>
              </tr>
            </tbody> 
          </VTable>
        </VCol>
      </VRow>
    </VContainer>
  </template>
  
  <script setup lang="ts">
  import { storeToRefs } from 'pinia';
  
  const peliculaStore = useTareasStore()
  const {obtenerPeliculas, eliminar, setPeliculaActual} = peliculaStore
  const {items} = storeToRefs(peliculaStore)
  
  await obtenerPeliculas()
  
  const navegarALFormulario = (task:ITarea)=>{
    setPeliculaActual(task)
    navigateTo('/tareas_form')
  }
  </script>
  
  <style scoped>
  
  </style>