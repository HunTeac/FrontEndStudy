const app = Vue.createApp({
  data() {
    return {
      name: "Jaehun Han",
      age: 26,
      randomNumber: Math.random(),
      imageUrl:
        "https://media.4-paws.org/f/3/9/1/f39115c5c798651f95141c37b692f76b669af761/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.webp",
      inputName: "",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    getRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
