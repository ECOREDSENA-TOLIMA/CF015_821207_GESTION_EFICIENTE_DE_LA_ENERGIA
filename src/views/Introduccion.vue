<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="flip-up") Para mejorar la eficiencia de un proceso se debe determinar el proceso, los usos de energía en cada paso, establecer la línea base energética, identificar las oportunidades de mejora de eficiencia, seleccionar las mejoras a implementar y los mecanismos de evaluación del desempeño energético después de la implementación. Estas acciones en conjunto se conocen como una auditoría energética.
    
    
    figure(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
