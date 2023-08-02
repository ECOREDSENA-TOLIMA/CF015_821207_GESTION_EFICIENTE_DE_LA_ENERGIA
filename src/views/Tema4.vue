<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Inventario de equipos consumidores de energía

    p.mb-5(data-aos="fade-right") Como parte de la auditoría energética se debe recopilar información detallada de los equipos operativos en las instalaciones que permitan determinar para cada equipo la función que desempeña en el proceso, el tipo de energía que consume, la estrategia de mantenimiento usada, el responsable directo del equipo (operación y mantenimiento) y las estrategias para mejorar la eficiencia y reducir consumos son: 


    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="flip-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 La información recopilada debe ser almacenada en forma individual para cada equipo, facilitando así su inventario.  De la diversidad de equipos consumidores de energía usados en los procesos, los más relevantes son: 
            p #[strong ● Envolventes de edificios:] son las partes de la edificación que se encuentran directamente expuestas al medio ambiente como puertas, ventanas, paredes y pisos, que además de funciones de privacidad y protección proveen, nivel de aislamiento térmico que afecta el desempeño energético de calentadores y aires acondicionados.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-01.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Calderas y sistemas de distribución de vapor: las calderas son equipos que convierten agua en vapor por transferencia de calor producido por la quema de combustible y el sistema de distribución de vapor son las tuberías y ductos que lo transportan a los lugares de uso en la planta.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-02.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Sistema de calefacción, ventilación y aire acondicionado (HVAC): es un conjunto de equipos destinados a controlar la humedad y temperatura de un sitio determinado. Incluye entre otros, evaporadores, condensadores, filtros de aire, ventiladores, compresores, material de aislamiento y sustancias refrigerantes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-03.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Sistema de suministro de energía eléctrica: es el conjunto de equipos que conducen la energía eléctrica desde las redes del operador de red hasta el tablero de distribución. Incluye conductores y ductos de acometida, equipo de seccionamiento y medida, transformadores y tableros de distribución. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-04.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Sistema de agua caliente: está compuesto por los tanques, tuberías, calentadores (eléctricos y gas) y radiadores que suministran el agua caliente para los baños, cocinas y máquinas lavadoras de ropa y lavavajillas. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-05.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Sistemas de alumbrado: incluye la red de distribución, las luminarias. A partir de que gran parte de la iluminación proviene de la reflexión en las superficies circundantes se debe, tener en cuenta el área y el tipo de superficie de los pisos, los techos y las paredes del área iluminada.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-06.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Sistema de distribución de aire comprimido: está compuesto por compresores y tuberías que suministran el aire comprimido para accionar herramientas neumáticas y algunas facilidades del sistema HVAC. 
            p #[strong ● Motores eléctricos:] son todos los motores que accionan los diferentes equipos de todos los sistemas descritos. Se estima que representan entre los ⅔ y los ¾ del consumo total de energía de las plantas.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-07.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Procesos de manufactura: incluye todos los equipos diferentes a los anteriormente descritos y que son requeridos para ejecutar procesos especiales como electrolíticos, químicos, de fundición, etc. También se incluyen en esta categoría los equipos administrativos como computadores e impresoras. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-08.png', alt='')





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
