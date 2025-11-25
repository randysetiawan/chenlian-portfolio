<script setup>
import { onMounted } from "vue";

// tooltip
import setTooltip from "@/assets/js/tooltip";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

defineProps({
  route: {
    type: String,
    required: true, // external URL
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  pro: {
    type: Boolean,
    default: false,
  }
});

onMounted(() => {
  setTooltip(store.bootstrap);
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <a :href="route" target="_blank" rel="noopener noreferrer">
    <div class="card move-on-hover" v-bind="$attrs">
      <img class="w-100" :src="image" :alt="title" loading="lazy" />
    </div>
    <div class="mt-2 ms-2">
      <h6 class="mb-0">{{ title }}</h6>
      <p class="text-secondary text-sm font-weight-normal">
        {{ subtitle }}
      </p>
    </div>
  </a>
</template>
