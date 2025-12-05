<script setup>
import ProjectCertificationCard from "../Components/ProjectCertificationCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import imgBinusGraduation from "@/assets/img/highlights/binusgraduation.jpg";
import imgApsit2025 from "@/assets/img/highlights/apsit2025.png";
import imgBinusThesisDefense from "@/assets/img/highlights/binusthesisdefense.jpeg";
import imgInternshipCompletion from "@/assets/img/highlights/internshipcompletion.jpeg";

</script>
<template>
  <section id="highlights" class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge color="success" class="mb-3">{{ $t('highlights.badge') }}</MaterialBadge>
            <h2 class="">{{ $t('highlights.title') }}</h2>
            <p class="lead">
              {{ $t('highlights.subtitle1') }} <br />
              {{ $t('highlights.subtitle2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ProjectCertificationCard class="min-height-250 max-height-250 shadow-lg"
                :title="$t('highlights.pic1title')" :image=imgBinusGraduation
                link="https://graduation.apps.binus.ac.id/editions/wisuda-72" />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ProjectCertificationCard class="min-height-250 max-height-250 shadow-lg"
                :title="$t('highlights.pic2title')" :image=imgApsit2025 link="https://apsit.co.in" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ProjectCertificationCard class="min-height-250 max-height-250 shadow-lg"
                :title="$t('highlights.pic3title')" :image="imgBinusThesisDefense"
                link="https://sis.binus.ac.id/2025/02/11/expo-artikel-ilmiah-2025-semester-ganjil-school-of-information-systems" />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ProjectCertificationCard class="min-height-250 max-height-250 shadow-lg"
                :title="$t('highlights.pic4title')" :image="imgInternshipCompletion"
                link="https://binus.ac.id/binusian-journey/track-certified-internship" />
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>
              {{ $t('highlights.title2') }}
            </h3>
            <h6 class="text-secondary font-weight-normal">
              {{ $t('highlights.subtitle3') }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
