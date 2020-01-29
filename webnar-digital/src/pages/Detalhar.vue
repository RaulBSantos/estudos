<template>
  <q-page padding>
    <div v-html="texto"></div>
    <q-page-sticky position="top-right" :offset="[18, 18]">
      <q-btn round color="negative" icon="play_arrow" @click="sintetizarFala()" />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: "Detalhar",
  props: {
    texto: {
      type: String
    }
  },
  methods: {
    sintetizarFala() {
      this.$speechTalk(window.getSelection().toString());
    }
  }
};
</script>
