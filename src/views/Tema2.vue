<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ejemplos de procesos industriales

    p.mb-5(data-aos="zoom-out-up") Algunos ejemplos de procesos industriales típicos de organizaciones interesadas en realizar auditoría energética se muestran en las siguientes figuras relacionadas con la extracción de metales y producción de azúcar:

    .row.justify-content-center.align-items-center.mt-5 
      .col-12.col-lg-10.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] #[i Diagrama de flujo extracción oro y/o plata] 
        div
          figure
            img(src='@/assets/curso/temas/tema2/tema2-01.svg', alt='En la figura 2, se muestra el diagrama de flujo de extracción de oro y/o plata.')  
            figcaption Nota. Tomado de Procesos mineros (s.f.). <br>https://procesosmineros.weebly.com/plata.html

    .row.mb-5(data-aos="fade-left")
      .col-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-02.png', alt='')

    .row.justify-content-center.align-items-center.mt-5 
      .col-12.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] #[i Diagrama de flujo productos de acero para construcción] 
        div
          figure
            img(src='@/assets/curso/temas/tema2/tema2-03.svg', alt='En la figura 3, se muestra el diagrama de flujo de productos de acero para construcción.')  
            figcaption Nota. Tomado de New Steel Construction (s.f.). <br>https://www.newsteelconstruction.com/wp/an-introduction-to-steelmaking/

    .row.mb-5(data-aos="fade-left")
      .col-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-04.png', alt='')

    .row.justify-content-center.align-items-center.mt-5 
      .col-12.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] #[i Diagrama de flujo producción azúcar] 
        div
          figure
            img(src='@/assets/curso/temas/tema2/tema2-05.svg', alt='En la figura 4, se muestra el diagrama de flujo de producción del azúcar.')  
            figcaption Nota. Tomado de ELSEVIER (s.f.). <br>https://www.elsevier.es/en-revista-ingenieria-investigacion-tecnologia-104-articulo-prevencion-minimizacion-control-contaminacion-ambiental-S1405774314706535#imagen-2

    .row.mb-5(data-aos="fade-left")
      .col-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-06.png', alt='')


</template>

<script>
export default {
  name: 'Tema2',
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
