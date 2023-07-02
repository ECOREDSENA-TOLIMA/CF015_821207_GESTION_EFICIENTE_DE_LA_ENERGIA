<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Planificación de las auditorías energéticas

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12(data-aos="fade-left")
        div
          figure
            img(src='@/assets/curso/temas/tema8/tema8-01.png', alt='') 

    p(data-aos="fade-right") Debido a que las actividades en campo de una auditoría energética pueden generar riesgos en la eficiencia de los procesos de la organización y/o en la integridad de las personas involucradas es deber del equipo auditor realizar una planificación eficaz para obtener los resultados propuestos y minimizar los riesgos de ocasionar daños a las personas o a la organización.

    p(data-aos="fade-right") El plan de auditoría debe ser aprobado por el cliente y socializado a los auditados antes del inicio de la auditoría.


    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12.col-lg-11(data-aos="fade-left" style="background-color:#E4DAF7")
        .row 
          .col-md-4.col-12.pt-3
            figure
              img(src='@/assets/curso/temas/tema8/tema8-02.png', alt='') 
          .col-md-8.col-12.mt-4
            p Aunque el nivel de detalle de la planificación varía de acuerdo con el tipo de auditoría, en general un plan eficiente de auditoría debe contener:
            ul.lista-ul.p-4
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Objetivos propuestos.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Información histórica de consumos y costos de energía.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Métodos usados durante la auditoría.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Alcance de la auditoría.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Cronograma de actividades con duración prevista de cada una de ellas.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Listado de miembros del equipo auditor especificando roles.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Listado de recursos de la organización necesarios para la ejecución de las actividades.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Revisión de información técnica referente a los procesos e instalaciones a auditar.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Aspectos específicos sobre confidencialidad de la información.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Relación de hallazgos de auditorías previas.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Listado de acciones de mitigación de riesgos.

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
