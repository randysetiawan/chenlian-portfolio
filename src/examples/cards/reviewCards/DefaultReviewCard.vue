<script setup>
const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  }
});

</script>
<template>
  <div class="col-lg-4 col-md-8">
    <div :class="`card ${props.color ? props.color : 'card-plain'}`">
      <div class="card-body">
        <img v-if="props.image" :src="props.image" :alt="props.name"
          class="avatar avatar-lg border-radius-lg shadow mt-n5" />
        <div class="author">
          <div class="name">
            <h6 class="mb-0 font-weight-bolder" :class="props.color ? 'text-white' : ''">
              {{ props.name }}
            </h6>
            <div class="stats" :class="props.color ? 'text-white' : ''">
              <i class="far fa-clock"></i> {{ props.desc }}
            </div>
          </div>
        </div>
        <p class="mt-4" :class="props.color ? 'text-white' : ''">
          {{ props.review }}
        </p>
      </div>
    </div>
  </div>
</template>
