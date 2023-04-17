<script setup>
import BaseMessage from "./base/BaseMessage.vue";
import BaseInputNumber from "./base/BaseInputNumber.vue";
import { computed, ref } from "vue";

const kelvin = ref(0);
const celcius = computed({
  get() {
    return kelvin.value - 273.15;
  },
  set(value) {
    kelvin.value = value + 273.15;
  },
});
const fahrenheit = computed({
    get(){
        return kelvin.value * 9/5 - 459.67;
    },
    set(value){
       kelvin.value = (value + 459.67) * 5/9;
    },
});
</script>

<template>
  <base-message data-role="error"> Error: plz try again later </base-message>
  <base-message data-role="warning">
    Application will be in maintenance ...
  </base-message>
  <base-message data-role="test"> Test message </base-message>
  <!-- <base-input
    label="Kelvin"
    unit="K"
    :modelValue="kelvin"
    @update:modelValue="changeKelvin($event)"
  /> -->
  <base-input-number v-model="kelvin" label="Kelvin" unit="K" />
  <base-input-number label="celcius" unit="°C" v-model="celcius" />
  <base-input-number label="fahrenheit" unit="°F" v-model="fahrenheit" />
  <p>Hello</p>
</template>

<style scoped></style>
