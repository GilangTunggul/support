<template>
<v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">Unlimited Demo Package</v-card-title>

            <v-card-subtitle>Langganan sekarang dan nikmati memakai support ticketing sistem secara premium.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Daftar Sekarang</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
  export default {
    name : "Card",
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'halyon',
          title: 'Main Demo',
          artist: 'Demo With User System',
        },
        {
          color: '#952175',
          src: 'uye',
          title: 'Admin Demo',
          artist: 'Dmo With User System',
        },
      ],
    }),
  }
</script>