<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Instrumentos y equipos de medición usados para la realización de auditorías energéticas

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12(data-aos="fade-left")
        div
          figure
            img(src='@/assets/curso/temas/tema6/tema6-01.png', alt='') 

    p(data-aos="fade-right") Para obtener la información de la cantidad de energía involucrada en cada proceso auditado e identificar las potenciales oportunidades de mejora, se deben tomar medidas a las variables relevantes según el tipo de energía consumida. Los instrumentos de medida y equipos auxiliares usados deben seleccionarse por precisión y facilidad de instalación, siendo los más comunes:


    SlyderF.mb-5.mt-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 09.] #[i Flexómetro o cinta métrica]
          .col-8
            img(src='@/assets/curso/temas/tema6/tema6-02.png' alt='En la figura 9, se muestra el flexómetro o cinta métrica.')
        h4.text-center Flexómetro o cinta métrica
        p Usado para determinar las dimensiones y las distancias entre equipos y de esta manera calcular pérdidas de energía por transporte.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-botones
            p.titulo.pb-0.mb-0 #[b Figura 10.] #[i Luxómetro]
          .col-8
            img(src='@/assets/curso/temas/tema6/tema6-03.png' alt='En la figura 10, se muestra un luxómetro')
        h4.text-center Luxómetro
        p Usado para determinar los niveles de iluminación de las áreas auditadas y compararlos con los niveles mínimos señalados en el RETILAP.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 11.] #[i Termómetro]
          .col-8
            img(src='@/assets/curso/temas/tema6/tema6-04.png' alt='En la figura 11, se muestra un termómetro')
        h4.text-center Termómetro
        p Usado para determinar las temperaturas de oficinas, áreas de trabajo y de los procesos para calcular las eficiencias térmicas e identificar las fuentes potenciales de recuperación de calor. Según el tipo de proceso podrían requerirse termómetros de inmersión, de superficie, infrarrojos y de radiación.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-botones
            p.titulo.pb-0.mb-0 #[b Figura 12.] #[i Voltímetro y amperímetro]
          .col-8
            img(src='@/assets/curso/temas/tema6/tema6-05.png' alt='En la figura 12, se muestra un voltímetro y amperímetro.')
        h4.text-center Voltímetro y amperímetro
        p Usados para medir los voltajes y corrientes eléctricas de operación y compararlos con los valores nominales de los equipos cuando se dispone de los datos de placa.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 13.] #[i Vatímetro]
          .col-8
            img(src='@/assets/curso/temas/tema6/tema6-06.png' alt='En la figura 13, se muestra un vatímetro.')
        h4.text-center Vatímetro
        p Usado para determinar el consumo real de potencia eléctrica de los equipos y el factor de potencia.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-botones
            p.titulo.pb-0.mb-0 #[b Figura 14.] #[i Analizador de combustión]
          .col-8
            img(src='@/assets/curso/temas/tema6/tema6-07.png' alt='En la figura 14, se muestra un analizador de combustión.')
        h4.text-center Analizador de combustión 
        p Usado para medir variables diversas como contenidos de oxígeno y dióxido de carbono, entre otros, de los gases de escape de hornos, calderas y demás equipos de quemado de combustible, para calcular la eficiencia de la combustión.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 15.] #[i Detectores ultrasónicos de fugas]
          .col-8
            img(src='@/assets/curso/temas/tema6/tema6-08.png' alt='En la figura 15, se muestran los Detectores ultrasónicos de fugas.')
        h4.text-center Detectores ultrasónicos de fugas
        p Usados para detectar las fugas de aire comprimido y probar el funcionamiento de las trampas de vapor.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-botones
            p.titulo.pb-0.mb-0 #[b Figura 16.] #[i Medidor de flujo]
          .col-8
            img(src='@/assets/curso/temas/tema6/tema6-09.png' alt='En la figura 16, se muestra un medidor de flujo.')
        h4.text-center Medidor de flujo 
        p Usado principalmente para medir la cantidad de aire en los ductos de los equipos de calefacción y aire acondicionado. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 17.] #[i Soplador de puerta]
          .col-8
            img(src='@/assets/curso/temas/tema6/tema6-10.png' alt='En la figura 17, se muestra un soplador de puerta.')
        h4.text-center Soplador de puerta
        p Usado para determinar la cantidad de aire por hora que se intercambia en los edificios administrativos.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-botones
            p.titulo.pb-0.mb-0 #[b Figura 18.] #[i Generador de humo / niebla]
          .col-8
            img(src='@/assets/curso/temas/tema6/tema6-11.png' alt='En la figura 18, se muestra un generador de humo / niebla.')
        h4.text-center Generador de humo / niebla 
        p Usado para identificar los puntos de filtración de aire en puertas, ventanas y ductos.


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
