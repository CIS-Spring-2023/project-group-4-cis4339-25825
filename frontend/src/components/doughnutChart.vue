<template>
  <div>
    <apexchart type="pie" 
    :options="chartOptions" 
    :series="chartSeries" 
    width="500" 
    height="350" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import axios from 'axios'

const apiURL = import.meta.env.VITE_ROOT_API
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
        title: {
      text: 'Clients by ZipCode',
      align: 'center',
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
        colors: [],
        labels: [],
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
              return value + '%'
            },
          },
        },
      },
      chartSeries: [],
    }
  },
  methods: {
    async updateChartData() {
      // fetch the updated data from the server
      try {
        const { data } = await axios.get(`${apiURL}/clients/zipcodes-chart`)
        const numLabels = data.labels.length
        const colors = this.generateRandomColorShades(numLabels)
        this.chartOptions = {
          ...this.chartOptions,
          colors,
          labels: data.labels,
        }
        this.chartSeries = data.chartSeries
      } catch (error) {
        console.error('Error fetching chart data:', error)
      }
    },
    generateRandomColorShades(numColors) {
      const colors = []
      for (let i = 0; i < numColors; i++) {
        const hue = 0
        const saturation = Math.floor(Math.random() * 51) + 50
        const lightness = Math.floor(Math.random() * 31) + 40
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
        colors.push(color)
      }
      return colors
    },
  },
  mounted() {
    // fetch the initial chart data when the component is mounted
    this.updateChartData()
  },
})
</script>
