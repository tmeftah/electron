<template>
  <div class="main">
    <!-- <textarea name id :disabled="!logged_in" v-model="text" @change="settext"></textarea> -->

    <vue-editor
      id="editor1"
      v-model="text"
      :disabled="!logged_in"
      :editor-toolbar="toolbar"
      @text-change="settext"
    ></vue-editor>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Main",

  data() {
    return {
      text: "",

      toolbar: [
        ["bold", "italic"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        ["clean"]
      ]
    };
  },
  computed: mapGetters(["logged_in", "gettext"]),
  methods: {
    ...mapActions(["setText"]),
    settext() {
      this.setText(this.text);
    }
  },
  created() {
    this.text = this.gettext;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.main {
  display: flex;
  flex-direction: column;
}
</style>
