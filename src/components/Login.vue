<template>
  <form class="container" @submit="login">
    <input type="submit" v-model="label" />
    <input type="text" placeholder="Passwort eingeben ...." v-model="password" v-if="!logged_in" />
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      password: ""
    };
  },
  computed: mapGetters(["label", "logged_in"]),
  methods: {
    ...mapActions(["CheckPassword"]),
    login(e) {
      e.preventDefault();
      this.CheckPassword(this.password);
      this.password = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  display: flex;
  padding-bottom: 20px;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  height: 40px;
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
