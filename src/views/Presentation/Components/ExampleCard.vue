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
  },
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
  <!-- Changed RouterLink → external link -->
  <a :href="route" target="_blank" rel="noopener noreferrer">
    <div class="card move-on-hover" v-bind="$attrs">
      <img
        class="w-100"
        :src="image"
        :alt="title"
        loading="lazy"
      />

      <!-- PRO Lock Icon -->
      <!-- <svg
        v-if="pro"
        class="position-absolute"
        :style="{ top: 10, right: 10 }"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="lock-black" stroke="none" fill="none" fill-rule="evenodd">
          <circle fill="#1F2937" cx="12" cy="12" r="12"></circle>
          <g transform="translate(7,5)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M5,0 C3.16666667,0 1.66666667,1.5 1.66666667,3.33333333..."
            ></path>
          </g>
        </g>
      </svg> -->
    </div>

    <div class="mt-2 ms-2">
      <h6 class="mb-0">{{ title }}</h6>
      <p class="text-secondary text-sm font-weight-normal">
        {{ subtitle }}
      </p>
    </div>
  </a>
</template>
