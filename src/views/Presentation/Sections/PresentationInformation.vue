<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Crafting Intelligent <br /> Digital Experiences"
              description="I build scalable software systems with a strong balance of engineering, analysis, and human-centered design. I bring ideas into polished, functional, and user-friendly products."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Let's Connect"
              description="If you're looking for a reliable developer who can transform ideas into well-engineered, user-focused solutions — I'd be happy to connect."
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Contact me',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Full-Cycle Engineering"
              description="From wireframes to deployment, I develop complete digital experiences with clean architecture and maintainable code."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Insight-Driven System Analysis"
              description="I translate business needs into technical solutions, ensuring systems are scalable, efficient, and easy to maintain."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Reliable Data Foundations"
              description="I design performant, secure, and well-structured databases that keep applications fast and trustworthy."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Intuitive UI & Meaningful UX"
              description="I blend design and psychology to craft interfaces people enjoy — visually appealing, consistent, and purpose-driven."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
