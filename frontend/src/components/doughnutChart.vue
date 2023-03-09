<template>
    <div>
      <apexchart
        type="pie"
        :options="chartOptions"
        :series="chartSeries"
        width="500"
        height="350"
      />
    </div>
  </template>

<script>
import { defineComponent } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
//import ApexCharts from 'apexcharts';

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
          },
        },
        colors: ['#fca5a5', '#f87171', '#ef4444','#b91c1c'],
        labels: ['aaa', 'BBB', 'CCC', 'DDD'],
        legend: {
          position: 'bottom',
          markers: {
            width: 12,
            height: 12,
            radius: 2,
          },
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: {
                height: 300,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
        tooltip: {
          y: {
            formatter: function (value) {
              return value + '%';
            },
          },
        },
      },
      chartSeries: [45, 15, 20, 30],
    };
  },
});
</script>
