<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Principios de las auditorías energéticas

    p(data-aos="fade-right") De acuerdo con la Norma ISO 50002 los cuatro principios que debe cumplir un auditor son:

    .row.mb-5.mt-5(data-aos="fade-down")
      .col-12
        .titulo-quinto.color-acento-contenido
          h2 Principios de las auditorías energéticas
          
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-12
        .row
          .col-12.tarjeta-tema-7(data-aos="fade-left")
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema7/tema7-02.svg' alt='AvatarTop')
              .tarjeta.tarjeta--border
                ul.lista-ul.p-4
                  li.mb-0 
                    i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                    span.mb-0 #[strong Competencia:] se refiere a que la capacitación y la experiencia del equipo auditor debe ser debidamente certificada, de acuerdo con la normatividad vigente en el ámbito de aplicación de los procesos auditados.

          .col-12.tarjeta-tema-7(data-aos="fade-left")
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema7/tema7-03.svg' alt='AvatarTop')
              .tarjeta.tarjeta--border
                ul.lista-ul.p-4
                  li.mb-0 
                    i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                    span.mb-0 #[strong Confidencialidad:] se refiere a que la información proporcionada por la organización debe ser protegida por el equipo auditor para garantizar su privacidad.

          .col-12.tarjeta-tema-7(data-aos="fade-left")
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema7/tema7-04.svg' alt='AvatarTop')
              .tarjeta.tarjeta--border
                ul.lista-ul.p-4
                  li.mb-0 
                    i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                    span.mb-0 #[strong Objetividad:] se refiere a que durante el proceso de auditoría los intereses de la organización tienen  prioridad sobre los intereses del equipo auditor cuando toma decisiones que puedan afectar la organización.

          .col-12.tarjeta-tema-7(data-aos="fade-left")
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema7/tema7-05.svg' alt='AvatarTop')
              .tarjeta.tarjeta--border
                ul.lista-ul.p-4
                  li.mb-0 
                    i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                    span.mb-0 #[strong Transparencia:] se refiere a que cualquier conflicto de intereses del equipo auditor debe ser revelado a la organización oportunamente.


    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12.col-lg-10.px-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema7/tema7-01.png', alt='') 
      .col-12.col-lg-10.py-4(data-aos="fade-down" style="background-color:#CDFCFC")
        p.mt-2 De acuerdo con la misma Norma ISO 50002 las principales características que debe cumplir una auditoría energética son:
        ul.lista-ul.p-4
          li.mb-0 
            i.mb-0.lista-ul__vineta(style="color:#0F58B9")
            span.mb-0 Adecuada para el alcance y objetivos propuestos.
          li.mb-0 
            i.mb-0.lista-ul__vineta(style="color:#0F58B9")
            span.mb-0 Abarcar la totalidad del alcance propuesto.
          li.mb-0 
            i.mb-0.lista-ul__vineta(style="color:#0F58B9")
            span.mb-0 Asegurar la confiabilidad de los datos recolectados.
          li.mb-0 
            i.mb-0.lista-ul__vineta(style="color:#0F58B9")
            span.mb-0 Identificar la fuente representativa de los datos y los sistemas de procesamiento pertinentes a estos.
          li.mb-0 
            i.mb-0.lista-ul__vineta(style="color:#0F58B9")
            span.mb-0 Determinar la relación costo / beneficio de las oportunidades de mejora identificadas.
          li.mb-0 
            i.mb-0.lista-ul__vineta(style="color:#0F58B9")
            span.mb-0 Verificar los resultados de las oportunidades de mejora implementadas. 













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
