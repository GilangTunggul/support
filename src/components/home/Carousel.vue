<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
	name: "Carousel",
    data () {
      return {
        items: [
          {
            src: '@/components/image/gambar.PNG',
          },
          {
            src: '@/components/Image/slide1.png',
          },
          {
            src: '@/components/Image/slide1.png',
          },
        ],
      }
    },
  }
</script>