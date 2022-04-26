<template>
  <form
    @submit.prevent="submit"
    :ref="name"
    :event="event"
    :action="action"
    autocomplete="off"
    :method="method"
    class="needs-validation"
    novalidate
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "FormTage",
  props: ["method", "action", "name", "event"],
  methods: {
      submit() {
          let myForm = this.$refs[this.$props.name]

          if (myForm.checkValidity()) {
              this.$emit(this.$props["event"]);
          }
          myForm.classList.add("was-validated");
      }
  },
};
</script>