const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText)
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },

});

app.mount('#app');
setTimeout(function() {
  app.unmount();
}, 3000)


const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza, yummy!"
    }
  }

})
app2.mount("#app2")

//....

// let message = "Hello";
// let longMessage = message + " World";
// console.log(longMessage)
// message = "Hello!!!!"
// console.log(longMessage)

const data = {
  message: "Hello!",
  longmessage: "Hello World"
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longmessage = value + " World"
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);
proxy.message = "Hello!!!!";
proxy.message = "Jösses";
console.log(proxy.longmessage);

