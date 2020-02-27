<template>
  <div class="customer">
    <h1>I'm a customer</h1>
    <p>I see {{ totalTvCount }} TVs!</p>
    <p v-show="happyStaff">The staff seems happy!</p>
    <p v-show="!totalTvCount">I can't buy any...</p>
    <button :disabled="!totalTvCount" @click="buyTv">Buy TV</button>
    <button :disabled="!totalTvCount" @click="buyTwoTvs">Buy two TVs</button>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "Customer",
  computed: {
    // If you have only one state/getter object spread operators are not necessarily needed
    // But we'll use it for now, so you can see how they are used
    // mapState/mapGetter accepts an array of strings as parameter
    ...mapState(["totalTvCount"]),
    ...mapGetters(["happyStaff"])
    // Code overrided by object spread operators:

    // totalTvCount() {
    //   return this.$store.state.totalTvCount;
    // },
    // happyStaff() {
    //   return this.$store.getters.happyStaff;
    // }
  },
  methods: {
    ...mapActions(["removeTv"]),
    buyTv() {
      this.removeTv(1);
      // Code overrided by object spread operators:
      /*
      // Dispatch action to buy a TV.
      this.$store.dispatch("removeTv", 1);
      */
    },
    buyTwoTvs() {
      this.removeTv(2);
      // Code overrided by object spread operators:
      /*
      // Dispatch action to buy two TVs.
      this.$store.dispatch("removeTv", 2);
      */
    }
  }
};
</script>

<style scoped></style>
