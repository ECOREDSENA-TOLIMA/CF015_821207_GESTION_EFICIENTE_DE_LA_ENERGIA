<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Aplicaciones del balance y flujo de energía en los procesos

    .row.mb-5
      .col-lg-3.col-md-4.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-01.svg', alt='')
      .col-lg-9.col-md-8.col-12(data-aos="fade-left")
        p.mt-3 Como parte de la auditoría energética se debe recopilar información detallada de los equipos operativos en las instalaciones que permitan determinar para cada equipo la función que desempeña en el proceso, el tipo de energía que consume, la estrategia de mantenimiento usada, el responsable directo del equipo (operación y mantenimiento) y las estrategias para mejorar la eficiencia y reducir consumos son: 

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="flip-down")
      SlyderA(tipo="b")
        .row
          .col-12.mb-4.mb-md-0
            p El resultado de aplicar dichas técnicas permite determinar la energía consumida y/o producida en cada proceso del diagrama de flujo de proceso, como se muestra en la siguiente grafica:
          .col-12
            .titulo-sexto.color-acento-contenido
              p.titulo.pb-0.mb-0 #[b Figura 5.] #[i Diagrama de flujo del proceso de la producción de varillas lisas ] 
            div.d-none.d-sm-none.d-md-block
              figure
                img(src='@/assets/curso/temas/tema3/tema3-02-md.svg', alt='En la figura 5, se muestra el diagrama de flujo del proceso de la producción de varillas lisas.')
                figcaption Nota. Tomado de https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf
            div.d-block.d-md-none
              figure
                img(src='@/assets/curso/temas/tema3/tema3-02-sm.svg', alt='En la figura 5, se muestra el diagrama de flujo del proceso de la producción de varillas lisas.')
                figcaption Nota. Tomado de https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf  
        .row
          .col-12.mb-4.mb-md-0
            .h4.text-center 
              //- span Balance de masa
            p La definición de un balance de masa es simple. Se reduce a la aplicación práctica de la #[b Ley de conservación de la materia.] Dicha ley, nos indica que toda la masa que entra a un sistema sale y/o se acumula, según el tipo de sistema que tengamos. En pocas palabras, la masa no se crea ni se destruye, sólo se transforma.
            p Para elaborar el balance de material de cada proceso se usa la ecuación de conservación como se muestra:
          .col-12
            .titulo-sexto.color-acento-contenido
              p.titulo.pb-0.mb-0 #[b Figura 6.] #[i Balance de masas] 
            div.d-none.d-sm-none.d-md-block
              figure
                img(src='@/assets/curso/temas/tema3/tema3-03-md.svg', alt='En la figura 6, se muestra el balance de masas de un proceso.')
                figcaption Nota: tomada de https://www.ingenieriaquimicareviews.com/2020/04/balance-de-masa-ingenieria-quimica.html
                //- figcaption Nota. Tomado de Ingeniería química.
            div.d-block.d-md-none
              figure
                img(src='@/assets/curso/temas/tema3/tema3-03-sm.svg', alt='En la figura 6, se muestra el balance de masas de un proceso.')
                figcaption Nota: tomada de https://www.ingenieriaquimicareviews.com/2020/04/balance-de-masa-ingenieria-quimica.html
                //- Nota. Tomado de Ingeniería química.
        .row
          .col-12.mb-4.mb-md-0
            p Para mostrar el flujo de energía de cada proceso se usa generalmente el Diagrama Sankey, que consiste en un diagrama de flujo donde el ancho de las flechas es proporcional a la magnitud representada por la flecha, como se muestra en la siguiente grafica:
          .col-12
            .titulo-sexto.color-acento-contenido
              p.titulo.pb-0.mb-0 #[b Figura 7.] #[i Diagrama de Sankey] 
            div.d-none.d-sm-none.d-md-block
              figure
                img(src='@/assets/curso/temas/tema3/tema3-04-md.svg', alt='En la figura 7, se muestra el diagrama de Sankey para representar el flujo de energía en cada proceso.')
                figcaption Nota. Tomado de https://www.researchgate.net/figure/Figura-38-Diagrama-de-Sankey-para-Oxicombustion_fig10_272496993
            div.d-block.d-md-none
              figure
                img(src='@/assets/curso/temas/tema3/tema3-04-sm.svg', alt='En la figura 7, se muestra el diagrama de Sankey para representar el flujo de energía en cada proceso.')
                figcaption Nota. Tomado de Researchgate s.f.


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
