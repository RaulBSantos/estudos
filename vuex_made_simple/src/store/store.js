import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: 10, // The TV inventory
    isLarryHappy: true,
    isJennyHappy: true
  },
  getters: {
    // Check if both Larry and Jenny are happey
    happyStaff: state => {
      return state.isJennyHappy && state.isLarryHappy;
    }
  },
  mutations: {
    // Jenny - TV inventory guy
    removeTv(state, amount) {
      // For now we only remove a tv at time.
      state.totalTvCount -= amount;
    }
  },
  actions: {
    // Larry - Supervises Jenny - Receives Customer calls
    removeTv(context, amount) {
      // For now we only remove a tv,
      // but this action can contain logic
      // so we could expand in the future.
      if (context.state.totalTvCount >= amount) {
        context.commit('removeTv', amount);
      }
    }
  }
});
