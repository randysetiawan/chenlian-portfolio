<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Brandon Setiawan",
          desc: "Content Specialist at United Creative",
          review: "I have the privilege of calling Randy as a role model in both personal and professional life. His dedication to excellence, strategic thinking, and ability to inspire those around him are truly remarkable."
        },
        {
          name: "Rezkindra Restoe Poetra",
          desc: "IT Application Consultant at Care Technologies",
          review: "I highly recommend Randy for admission to any IT companies. He is talented, caring, intuitive, dedicated, and focused in his pursuits. Randy consistently seeks out constructive feedback so he can improve his IT skills.",
          class: "ms-md-auto",
          color: "bg-gradient-success"
        },
        {
          name: "Steven Loo",
          desc: "Owner of Innoplast Indonesia",
          review: "Randy is an excellent student. I had a pleasure study with him so far, and he leads by example. He always kept the team morale up, and I believe he is the best student I ever had as he is friendly."
        },
      ]
    }
  }
}
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">What people say about me</h2>
          <h2 class="text-gradient text-success mb-3">
            Real words from real collaborators
          </h2>
          <p class="lead">
            I'm grateful to have worked with amazing people. Here's what they say about my me:
          </p>
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard v-for="testimonial in testimonials" :key="testimonial.name" :class="testimonial.class || ''" :color="testimonial.color || null" :name="testimonial.name"
          :desc="testimonial.desc" :review="testimonial.review" />
      </div>
    </div>
  </section>
</template>
