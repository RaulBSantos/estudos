<template>
  <q-page padding><div v-html="texto"></div></q-page>
</template>

<script>
export default {
  name: "Detalhar",
  props: {
    texto: {
      type: String
    }
  }
};
</script>
