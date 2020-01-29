import { Loading, QSpinnerAudio } from "quasar";

export default async ({ Vue }) => {
  Vue.prototype.$speechTalk = text => {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "pt-BR";
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    setTimeout(() => {
      window.speechSynthesis.speak(speech);
    }, 300);

    speech.addEventListener("start", () => {
      Loading.show({
        delay: 0,
        spinner: QSpinnerAudio,
        backgroundColor: "secondary"
      });
    });

    speech.addEventListener("end", () => {
      Loading.hide();
    });
  };
};
