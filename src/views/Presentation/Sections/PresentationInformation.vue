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
              :title="`${$t('services.title1front')}<br/>${$t('services.title2front')}`"
              :description="$t('services.descFront')"
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              :title="$t('services.titleBack')"
              :description="$t('services.descBack')"
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: $t('contactMe'),
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="code"
              :title="$t('services.card1title')"
              :description="$t('services.card1desc')"
            />
            <DefaultInfoCard
              icon="account_tree"
              :title="$t('services.card2title')"
              :description="$t('services.card2desc')"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="storage"
              :title="$t('services.card3title')"
              :description="$t('services.card3desc')"
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              :title="$t('services.card4title')"
              :description="$t('services.card4desc')"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
