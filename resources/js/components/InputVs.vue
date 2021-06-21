<template>
  <div class="vs-parent">
    <div class="input-parent">
      <div class="content-vs">
        <input
          :type="type"
          class="input-vs"
          @input="handleInput"
          :class="{ 'input-vs--has-icon': isIcon }"
          v-model="value"
        />
        <label
          v-if="value == ''"
          class="label-vs"
          :class="{ 'label-vs--placeholder': getlabelPlaceholder }"
          >{{ labelPlaceholder || placeholder }}</label
        >
        <span v-if="isIcon" class="icon-vs"><slot name="icon"></slot></span>
      </div>
    </div>
    <div class="vs-input__message vs-input__message--danger">
      <slot name="error"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "placeholder", "label-placeholder"],
  name: "input-vs",
  computed: {
    getlabelPlaceholder() {
      return this["labelPlaceholder"] != undefined;
    },
    isIcon() {
      return this.$slots.icon != undefined;
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.value);
    },
  },
};
</script>

