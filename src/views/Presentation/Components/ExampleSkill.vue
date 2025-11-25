<script setup>
import { onMounted } from "vue";
import setTooltip from "@/assets/js/tooltip"; // same tooltip initializer you use elsewhere

defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: null, // if null → non-clickable skill
  }
});

// enable bootstrap tooltip
onMounted(() => {
  setTooltip();
});
</script>

<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="skill-item text-center"
    :title="title"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
  >
    <img :src="image" :alt="title" class="skill-icon" />
</a>
</template>

<style scoped>
.skill-item {
  width: 33.33%; /* 3 icons per row */
  padding: 20px 10px;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.skill-item:hover {
  transform: translateY(-6px);
  opacity: 0.9;
}

.skill-icon {
  width: 55px;
  height: 55px;
  object-fit: contain;
}
</style>
