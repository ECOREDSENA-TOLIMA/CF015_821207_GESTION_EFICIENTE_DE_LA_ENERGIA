<template lang="pug">
.curso-main-container.pb-3.tema10
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Identificación de oportunidades de mejora del desempeño energético

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12(data-aos="fade-left")
        div
          figure
            img(src='@/assets/curso/temas/tema10/tema10-01.png', alt='') 

    p(data-aos="fade-right") Las oportunidades de mejora deben ser identificadas en campo, basándose en la experticia del equipo auditor para recolectar los datos energéticos relevantes y durante la fase de análisis se debe evaluar su impacto:

    .row.mb-4.mt-5(data-aos="fade-down")
      .col-12
        .titulo-quinto.color-acento-contenido
          h2 Identificación de oportunidades de mejora del desempeño energético

    .row.justify-content-center.align-items-center.mb-4.mt-5(data-aos="fade-down")
      .col-12.col-lg-10.col-md-11.d-none.d-sm-none.d-md-block
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema10/tema10-02.svg', alt='Identificación de oportunidades de mejora del desempeño energético')
          .tarjeta.color-acento-botones.p-3(x="18%" y="8%" numero="+")
            ul.lista-ul
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Cálculo del ahorro económico logrado con la implementación.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Estimación de costos de la inversión.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Cálculo de periodo de retorno de la inversión.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Estimación del aumento de la productividad y la eficiencia del mantenimiento con la implementación.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Comparación de la mejora en la eficiencia energética entre diferentes alternativas de implementación.

          .tarjeta.color-acento-botones.p-3(x="6%" y="22%" numero="+")
            p También se pueden identificar oportunidades de mejora consultando las hojas de datos técnicos del equipo, las recomendaciones del fabricante, la revisión de bibliografía sobre el funcionamiento del equipo y de benchmarking del mercado realizado por los expertos. 

          .tarjeta.color-acento-botones.p-3(x="85%" y="8%" numero="+")
            p En general se encuentran oportunidades de mejora de eficiencia por sustitución de combustibles, cogeneración de energía, mejoramiento en las redes de distribución de energía y cambio de equipos por otros de mejor eficiencia.

          .tarjeta.color-acento-botones.p-3(x="95%" y="22%" numero="+")
            p En el reporte de auditoría el orden de presentación de las oportunidades de mejora debe ser de mayor a menor impacto en la eficiencia energética.

      .col-12.col-lg-10.col-md-11.d-block.d-md-none
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema10/tema10-03.svg', alt='Identificación de oportunidades de mejora del desempeño energético')
          .tarjeta.color-acento-botones.p-3(x="18%" y="16%" numero="+")
            ul.lista-ul
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Cálculo del ahorro económico logrado con la implementación.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Estimación de costos de la inversión.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Cálculo de periodo de retorno de la inversión.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Estimación del aumento de la productividad y la eficiencia del mantenimiento con la implementación.
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.mb-0 Comparación de la mejora en la eficiencia energética entre diferentes alternativas de implementación.

          .tarjeta.color-acento-botones.p-3(x="10%" y="30%" numero="+")
            p También se pueden identificar oportunidades de mejora consultando las hojas de datos técnicos del equipo, las recomendaciones del fabricante, la revisión de bibliografía sobre el funcionamiento del equipo y de benchmarking del mercado realizado por los expertos. 

          .tarjeta.color-acento-botones.p-3(x="80%" y="16%" numero="+")
            p En general se encuentran oportunidades de mejora de eficiencia por sustitución de combustibles, cogeneración de energía, mejoramiento en las redes de distribución de energía y cambio de equipos por otros de mejor eficiencia.

          .tarjeta.color-acento-botones.p-3(x="88%" y="30%" numero="+")
            p En el reporte de auditoría el orden de presentación de las oportunidades de mejora debe ser de mayor a menor impacto en la eficiencia energética.


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
