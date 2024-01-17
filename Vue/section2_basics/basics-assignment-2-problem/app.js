const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    showAlert() {
      alert("Submitted!");
    },
  },
});

app.mount("#assignment");
