<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import Header from "../../examples/Header.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";
import PresentationAbout from "./Sections/PresentationAbout.vue";
import PresentationExperienceEducation from "./Sections/PresentationExperienceEducation.vue";
import PresentationContactUs from "./Sections/PresentationContactUs.vue";
import PresentationFooter from "./Sections/PresentationFooter.vue";
import ReadyTo from "./Sections/ReadyTo.vue";
import BuildStack from "./Sections/BuildStack.vue";
import SocialMedia from "./Sections/SocialMedia.vue";

//data
import collectionsData from "./Sections/Data/collectionsData";
import experienceEducationData from "./Sections/Data/experienceEducationData";

//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
    body.classList.add("presentation-page");
    body.classList.add("bg-gray-200");
});
onUnmounted(() => {
    body.classList.remove("presentation-page");
    body.classList.remove("bg-gray-200");
});
</script>

<template>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <NavbarDefault :sticky="true" />
            </div>
        </div>
    </div>
    <Header>
        <div class="page-header min-vh-75" :style="`background-image: url(${vueMkHeader})`" loading="lazy">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 text-center mx-auto position-relative">
                        <h1 class="text-white pt-3 mt-n5 me-2" :style="{ display: 'inline-block ' }">
                            {{ $t('welcomeTitle') }}
                        </h1>
                        <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
                            {{ $t('welcomeMsg') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Header>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
        <PresentationCounter />
        <PresentationAbout />
        <PresentationInformation />
        <PresentationExperienceEducation :data="experienceEducationData" />
        <PresentationExample :data="collectionsData" />
        <PresentationPages />
        <ReadyTo />
        <BuildStack />
        <SocialMedia />
        <PresentationContactUs />
    </div>
    <PresentationFooter />
</template>
