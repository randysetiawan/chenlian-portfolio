<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import imgSigninCover from "@/assets/img/signin-cover.png";
import imgBinusGraduation from "@/assets/img/binusgraduation.jpg";
import imgApsit2025 from "@/assets/img/apsit2025.png";
import imgBinusThesisDefense from "@/assets/img/binusthesisdefense.jpeg";
import imgInternshipCompletion from "@/assets/img/internshipcompletion.jpeg";

</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge color="success" class="mb-3"
              >Highlights</MaterialBadge
            >
            <h2 class="">Achievements & Accomplishments</h2>
            <p class="lead">
              A quick overview of important milestones I've achieved throughout <br />
              my academic and professional journey.
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
              <ExampleCard
                class="min-height-250 max-height-250 shadow-lg"
                title="72nd Bina Nusantara Graduation 2025"
                :image=imgBinusGraduation
                route="https://graduation.apps.binus.ac.id/editions/wisuda-72"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="min-height-250 max-height-250 shadow-lg"
                title="3rd International Conference in Advances in Power, Signal, and Information Technology 2025"
                :image=imgApsit2025
                route="https://apsit.co.in"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="min-height-250 max-height-250 shadow-lg"
                title="Bina Nusantara Research Paper Expo 2025"
                :image="imgBinusThesisDefense"
                route="https://sis.binus.ac.id/2025/02/11/expo-artikel-ilmiah-2025-semester-ganjil-school-of-information-systems"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="min-height-250 max-height-250 shadow-lg"
                title="Bina Nusantara Enrichment Program - Internship 2023 - 2024"
                :image="imgInternshipCompletion"
                route="https://binus.ac.id/binusian-journey/track-certified-internship"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>
              Professional Achievements & Educational Accomplishments
            </h3>
            <h6 class="text-secondary font-weight-normal">
              Each tile represents an important milestone that shaped my skills, mindset, and technical foundation.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
