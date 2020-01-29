import { HTTPClient } from "boot/axios";

const setPosts = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get("v2/posts")
      .then(suc => {
        commit("SET_POSTS", suc.data);
        resolve(suc.data);
        // eslint-disable-next-line no-console
        console.log(suc.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export { setPosts };
