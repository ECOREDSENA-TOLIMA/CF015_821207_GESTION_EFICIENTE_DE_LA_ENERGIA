<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Reporte de auditoría energética

      
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12(data-aos="fade-left")
        div
          figure
            img(src='@/assets/curso/temas/tema11/tema11-01.png', alt='') 

    p(data-aos="fade-right") De acuerdo con la Norma ISO 50002 el informe de auditoría energética debe incluir:

    .row.mb-4.mt-5(data-aos="fade-down")
      .col-12
        .titulo-quinto.color-acento-contenido
          h2 Reporte de auditoría energética
          
    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Auditoría energética
            ul.lista-ul
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Descripción del alcance, límites y objetivos.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Información sobre esquemas de medición usados, declaración sobre orígenes de datos (medidos, calculados o asumidos), copia de certificados de ensayos realizados y de calibración de equipos usados.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Análisis para identificación de usos significativos de energía (USE).
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Descripción de métodos de cálculo y estimaciones para la identificación de oportunidades de mejora de eficiencia.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema11/tema11-06.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Resumen ejecutivo
            ul.lista-ul
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Listado priorizado de las oportunidades de mejora.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Programa de implantación sugerido.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema11/tema11-04.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Antecedentes
            ul.lista-ul
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Información general sobre la organización auditada, los miembros del equipo auditor y la metodología usada para desarrollar la auditoría.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Variables del entorno y contexto durante la auditoría.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Descripción de los procesos auditados.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Matriz de requisitos legales aplicables a la auditoría.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema11/tema11-03.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Oportunidades de mejora de eficiencia energética
            ul.lista-ul
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Plan de acción sugerido.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Descripción de métodos de cálculo y estimaciones usados en el análisis económico de las acciones sugeridas en el plan de acción.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Análisis económico de las opciones presentadas.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Listado de posibles interacciones entre las opciones propuestas.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Plan de seguimiento para la evaluación de resultados de las mejoras implementadas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema11/tema11-02.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Conclusiones
            ul.lista-ul
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Se relacionan los hallazgos encontrados, el estado energético inicial, los usos significativos de energía, las oportunidades de mejora identificadas, las oportunidades de mejora seleccionadas para implementar y el plan de seguimiento propuesto para la evaluación de eficiencia energética alcanzada con la implementación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema11/tema11-05.png', alt='')



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
