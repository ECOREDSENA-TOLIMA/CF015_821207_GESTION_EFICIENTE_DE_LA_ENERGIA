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
            img(src='@/assets/curso/temas/tema2/tema2-01.svg', alt='')  
            figcaption Nota. Tomado de Procesos mineros (s.f.). 

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
            img(src='@/assets/curso/temas/tema2/tema2-03.png', alt='')  
            figcaption Nota. Tomado de Industria del acero (2013.). 

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
            img(src='@/assets/curso/temas/tema2/tema2-05.png', alt='')  
            figcaption Nota. Tomado de ELSEVIER (s.f.). 

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
