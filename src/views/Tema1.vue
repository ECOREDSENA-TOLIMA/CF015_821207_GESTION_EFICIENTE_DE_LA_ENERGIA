<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diagrama de flujo de procesos
      
    p.mb-5(data-aos="zoom-out-up") El primer paso para lograr una auditoría energética eficaz es conocer el proceso que se va a auditar, los insumos, los productos obtenidos, las variables de entorno, etc., y una forma de conocer un proceso es revisando su diagrama de flujo. El diagrama de flujo de un proceso es la representación gráfica con símbolos normalizados para cada uno de los pasos del proceso, mostrando con flechas el orden de ejecución, las entradas y salidas de cada paso, como se muestra en la siguiente figura.

    .row.justify-content-center.align-items-center.mt-5 
      .col-12.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] #[i Ejemplo diagrama de flujo de proceso] 
        div.d-none.d-sm-none.d-md-block
          figure
            img(src='@/assets/curso/temas/tema1/tema1-01-md.svg', alt='')  
            figcaption Nota. Tomado de Implementación de un sistema gestión de energía pág. 53 s.f. https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf
        div.d-block.d-md-none
          figure
            img(src='@/assets/curso/temas/tema1/tema1-01-sm.svg', alt='')  
            figcaption Nota. Tomado de Implementación de un sistema gestión de energía pág. 53 s.f. https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf

    .row.mb-5(data-aos="fade-left")
      .col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-02.png', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
