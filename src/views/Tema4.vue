<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Inventario de equipos consumidores de energía

    p.mb-5(data-aos="fade-right") Como parte de la auditoría energética se debe recopilar información detallada de los equipos operativos en las instalaciones que permitan determinar para cada equipo la función que desempeña en el proceso, el tipo de energía que consume, la estrategia de mantenimiento usada, el responsable directo del equipo (operación y mantenimiento) y las estrategias para mejorar la eficiencia y reducir consumos son: 


    .h1 #pendiente slyders#





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
