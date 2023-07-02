<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Introducción a las auditorías energéticas

    p(data-aos="flip-down") La auditoría energética es la herramienta usada para conocer cómo, dónde, y cuándo se usa la energía en una organización y de esta manera identificar las oportunidades de reducción del uso y/o costo de la misma, sin afectar la calidad de los productos. Además, por ser parte integral del Sistema de Gestión Eficiente de Energía se han desarrollado estándares específicos para su normalización como, por ejemplo, la ISO 50002:2014 auditorías energéticas.
    p(data-aos="flip-down") Un ejemplo de una lista de chequeo para la verificación de equipos durante una auditoría se muestra en la siguiente figura:

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12.col-md-10.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] #[i Lista de chequeo para verificación equipos] 
      .col-12.col-md-10.px-0(data-aos="fade-down")
        .tabla-a.color-primario
          table
            caption Nota. Tomado de ICONTEC, NTC-ISO 50002
            thead
              tr
                th Elemento Principal
                th Lugares a visitar
                th Verificado
            tbody
              tr
                td(rowspan="4") Elemento Principal
                td Cubierta
                td 
              tr 
                td Paredes
                td 
              tr 
                td Ventanas
                td 
              tr 
                td Sótanos
                td 
              tr
                td(rowspan="3") Sistemas de calentamiento y control
                td Cuarto de calderas
                td
              tr 
                td Cuartos de distribución de calor
                td 
              tr 
                td Racks de distribución/túneles
                td 
              tr 
                td Sistemas de enfriamiento y control
                td Cuarto de chillers o cubierta donde se encuentran los equipos
                td 
              tr 
                td(rowspan="2") Sistema de ventilación y aire acondicionado y UMA's
                td Cuartos mecánicos donde se encuentran las UMAS's
                td 
              tr 
                td Espacios técnicos
                td 
              tr
                td(rowspan="3") Sistemas de iluminación y control
                td Recintos de muestra por uso
                td
              tr 
                td Áreas comunes
                td 
              tr 
                td Áreas externas iluminadas
                td 
              tr 
                td Electrodomésticos
                td Espacios residenciales de muestra
                td 
              tr 
                td(rowspan="2") Equipos de oficina
                td Recintos de muestra por uso
                td 
              tr 
                td Centros de computo y servidores
                td 
              tr 
                td Otros equipos (Ej... médicos) 
                td 
                td 
              tr 
                td Sistemas internos de transporte
                td 
                td 
              tr
                td(rowspan="3") Sistemas anti-congelamiento y control
                td Tableros de distribución
                td
              tr 
                td Áreas restringidas
                td 
              tr 
                td Areas calentadas, calentamiento de tuberías
                td
              tr
                td(rowspan="8") Otros suministros energéticos
                td Planta de generación de vapor
                td
              tr 
                td Distribución de vapor
                td 
              tr 
                td Tanques y bombas de condensados
                td
              tr 
                td Cuarto de compresores
                td
              tr 
                td Líneas y drenajes de aire comprimido 
                td
              tr 
                td Planta de piscina
                td
              tr 
                td Otros cuartos de servicio técnico 
                td
              tr 
                td Otras distribuciones
                td
              tr 
                td Sistema de automatización de la edificación 
                td Acceso a la electrónica 
                td 
              tr 
                td Otros sistemas consumidores de energía
                td Piscinas...
                td 

             
    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="flip-down")   
      TabsC.color-primario
        .py-3.py-md-4(titulo="<strong>Introducción a las auditorías energéticas</strong>")
          .row
            .col-12
              ul.lista-ul.mb-3
                li 
                  i.fas.fa-arrow-right(style="color:#0F58B9")
                  span.text-bold Son actividades propias de una auditoría energética:
            .col-md-4.col-12
              figure
                img(src='@/assets/curso/temas/tema5/tema5-01.png', alt='')
            .col-md-8.col-12.mb-4.mb-md-0(data-aos="flip-down")
              ul.lista-ul.mb-3
                li.mb-0 
                  i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                  span.mb-0 Análisis del histórico de consumo de energía y agua de la organización, incluido el sistema tarifario de los servicios contratados.
                li.mb-0 
                  i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                  span.mb-0 Identificar puntos calientes en las instalaciones.
                li.mb-0 
                  i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                  span.mb-0 Evaluación de los parámetros de los sistemas de puesta a tierra existentes.
                li.mb-0 
                  i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                  span.mb-0 Estudio de la coordinación de protecciones eléctricas.
                li.mb-0 
                  i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                  span.mb-0 Elaboración del balance energético.
                li.mb-0 
                  i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                  span.mb-0 Calcular la eficiencia energética de los procesos.
                li.mb-0 
                  i.mb-0.lista-ul__vineta(style="color:#0F58B9")
                  span.mb-0 Estimación de las inversiones y de la disminución de costos por implementación de las medidas correctivas.

            .col-12.mb-4.mt-4(data-aos="flip-down")
              .cajon.color-acento-botones.p-4.mb-4
                p Las auditorías energéticas se pueden realizar de forma global o por áreas o procesos, de acuerdo con la complejidad de las instalaciones y la expectativa del usuario. En cualquiera de los casos, la persona responsable (auditor) de realizarla debe conocer los procesos involucrados y los equipos usados por la empresa auditada. Debido a la diversidad de procesos existentes el auditor debe tener una formación amplia para visualizar los procesos como un todo y apoyarse en un equipo multidisciplinario de especialistas donde la complejidad de los procesos así lo requiera.

            .col-12
              ul.lista-ul.mb-3
                li 
                  i.fas.fa-arrow-right(style="color:#0F58B9")
                  span.text-bold Las auditorías energéticas se  pueden clasificar según su alcance en:




                



                






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
