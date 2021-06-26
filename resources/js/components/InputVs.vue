<template>
  <div class="input-main">
    <div class="input-parent">
      <div class="content-vs">
        <input
          :type="type"
          class="input-vs"
          @input="handleInput"
          :class="{ 'input-vs--has-icon': isIcon }"
          v-model="invalue"
          :value="value"
        />
        <label
          v-if="invalue == ''"
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
  props: ["type", "placeholder", "label-placeholder",'value'],
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
      invalue: this.value,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.invalue);
    },
  },
};
</script>

