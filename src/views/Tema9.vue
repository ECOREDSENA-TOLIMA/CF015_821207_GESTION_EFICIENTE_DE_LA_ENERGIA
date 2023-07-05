<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Procesos de análisis en las auditorías energéticas


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-4.col-12(data-aos="fade-right")
        figure 
          img(src='@/assets/curso/temas/tema9/tema9-01.svg', alt='')
      .col-lg-8.col-md-8.col-12(data-aos="fade-left")
        p Con la información obtenida con la documentación histórica y los datos recolectados en la visita para cada proceso auditado se realiza la fase de análisis para obtener la denominada caracterización energética, que básicamente consta de dos elementos: la línea base del rendimiento energético y las oportunidades de mejora del desempeño energético.
        p La línea base del rendimiento energético realizada a partir de la situación existente antes de la auditoría debe incluir:

    .row.py-md-4.mb-5(data-aos="fade-right")
      .col-12
        ul.lista-ul.mb-3
          li 
            i.fas.fa-arrow-right(style="color:#0F58B9")
            span.text-bold Consumos de energía desglosados por uso y fuente en cada proceso auditado.
      .col-12
        p Como resultado de este análisis se obtiene la matriz de consumo y la de costos, como se muestra en el ejemplo de la siguiente figura:

    .row.justify-content-center.align-items-center.mt-5.mb-4
      .col-12.col-lg-10.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] #[i Ejemplo de matriz de consumo y de costos] 
        div.d-none.d-sm-none.d-md-block
          figure
            img(src='@/assets/curso/temas/tema9/tema9-02-md.svg', alt='')  
            figcaption Nota. Tomado de la Red colombiana de conocimiento en eficiencia energética - RECIEE (s.f.).
        div.d-block.d-md-none
          figure
            img(src='@/assets/curso/temas/tema9/tema9-02-sm.svg', alt='')  
            figcaption Nota. Tomado de la Red colombiana de conocimiento en eficiencia energética - RECIEE (s.f.).


    .row.py-md-4.mb-5(data-aos="fade-right")
      .col-12
        ul.lista-ul.mb-3
          li 
            i.fas.fa-arrow-right(style="color:#0F58B9")
            span.text-bold Flujos y balances energéticos de cada proceso auditado.
      .col-12
        p El objetivo de este análisis es obtener el flujo de energía de cada proceso, tomando como base el diagrama de proceso de la organización y el balance de energía realizado con la información recolectada. 



    .row.justify-content-center.align-items-center.mt-5.mb-5(style="background-color:#E4DAF7")
      .col-12.col-lg-11(data-aos="fade-left")
        .row 
          .col-md-11-col-lg-10.col-12.pt-3
            ul.lista-ul
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.text-bold Tendencias de consumo de energía de acuerdo con la información histórica.
            p(data-aos="fade-right") Con esta figura se puede determinar visualmente valores de consumo mínimo, máximo y promedio. También se pueden identificar periodos de bajo y alto consumo.
            .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-down")
              .col-12(data-aos="fade-right")
                .titulo-sexto.color-acento-contenido
                  p.titulo.pb-0.mb-0 #[b Figura 7.] #[i Ejemplo de gráfica de consumo] 
                div.d-none.d-sm-none.d-md-block
                  figure
                    img(src='@/assets/curso/temas/tema9/tema9-03-md.svg', alt='')  
                    figcaption Nota. Tomado de la Red Colombiana de conocimiento en eficiencia energética - RECIEE (s.f.). 
                div.d-block.d-md-none
                  figure
                    img(src='@/assets/curso/temas/tema9/tema9-03-sm.svg', alt='')  
                    figcaption Nota. Tomado de la Red Colombiana de conocimiento en eficiencia energética - RECIEE (s.f.). 

          .col-md-11-col-lg-10.col-12.pt-3
            ul.lista-ul
              li.mb-0 
                i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                span.text-bold Relación de variables que afectan el consumo de energía.
            p(data-aos="fade-right") El objetivo principal de esta relación es identificar los usos significativos de la energía (USE) en los procesos de la organización, mediante la elaboración de Diagramas de Pareto con la información energética obtenida del histórico de consumos y de la recolección de datos en campo organizada por procesos como se muestra en las siguientes figuras:
            .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-down")
              .col-12(data-aos="fade-right")
                .titulo-sexto.color-acento-contenido
                  p.titulo.pb-0.mb-0 #[b Figura 8.] #[i Ejemplo del Diagrama de Pareto del consumo de energía] 
                div.d-none.d-sm-none.d-md-block
                  figure
                    img(src='@/assets/curso/temas/tema9/tema9-04-md.svg', alt='')  
                    figcaption Nota. Tomado de la Red Colombiana de conocimiento en eficiencia energética - RECIEE (s.f.). 
                div.d-block.d-md-none
                  figure
                    img(src='@/assets/curso/temas/tema9/tema9-04-sm.svg', alt='')  
                    figcaption Nota. Tomado de la Red Colombiana de conocimiento en eficiencia energética - RECIEE (s.f.). 

            .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-down")
              .col-12(data-aos="fade-right")
                .titulo-sexto.color-acento-contenido
                  p.titulo.pb-0.mb-0 #[b Figura 9.] #[i Formato para la identificación de los USE] 
                div
                  figure
                    img(src='@/assets/curso/temas/tema9/tema9-05.svg', alt='')  
                    figcaption Nota. Tomado de la Red colombiana de conocimiento en eficiencia energética - RECIEE (s.f.). 


    .row.py-md-4.mb-5(data-aos="fade-right")
      .col-12
        ul.lista-ul.mb-3
          li 
            i.fas.fa-arrow-right(style="color:#0F58B9")
            span.text-bold Listado de indicadores de desempeño energético propuesto.
      .col-12
        p De acuerdo con la organización se deben definir los indicadores de desempeño energético a los que se les efectuará seguimiento después de implementadas las mejoras para comparar con la línea base energética determinada al comienzo de la auditoría. Los indicadores de desempeño pueden ser consumo de energía instantánea, o promedio, eficiencia energética por equipo y por proceso, etc. En todo caso los indicadores se prefieren cuantitativos y medibles, no estimados.
        p De acuerdo con la Norma ISO 50006 un listado de indicadores típicos con sus ventajas y desventajas se muestra en la siguiente figura:


    .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-down")
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 10.] #[i Indicadores de eficiencia energética típicos .] 
        div
          figure
            img(src='@/assets/curso/temas/tema9/tema9-06.svg', alt='')  
            figcaption Nota. Tomado de la Red colombiana de conocimiento en eficiencia energética - RECIEE (s.f.). 




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
