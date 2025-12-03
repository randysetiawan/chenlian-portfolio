<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";
import PresentationAbout from "./Sections/PresentationAbout.vue";
import PresentationExperienceEducation from "./Sections/PresentationExperienceEducation.vue";
import PresentationContactUs from "./Sections/PresentationContactUs.vue";
import PresentationFooter from "./Sections/PresentationFooter.vue";

//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
import logoVue from "@/assets/img/logos/vue.jpg";
import logoPopperJs from "@/assets/img/popperjs.svg";
import logoAngular from "@/assets/img/logos/angular.jpg";
import logoReact from "@/assets/img/logos/react.jpg";
import logoSketch from "@/assets/img/logos/sketch.jpg";

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
        <PresentationExperienceEducation />
        <PresentationExample :data="data" />
        <PresentationPages />
        <!-- <PresentationTestimonials /> -->
        <div class="container-fluid mt-sm-5 border-radius-xl" :style="{
            background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
        }">
            <div class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" :style="{
                backgroundImage: `url(${wavesWhite})`
            }" loading="lazy">
                <span class="mask bg-gradient-dark"></span>
                <div class="container">
                    <div class="row">
                        <div class="d-flex justify-content-center p-5">
                            <div class="col-lg-8 ms-lg-5 text-center">
                                <h3 class="text-white">
                                    {{ $t('readyTo') }}
                                </h3>
                                <p class="text-white text-md">
                                    {{ $t('readyToDesc') }}
                                </p>
                                <a href="https://www.creative-tim.com/product/vue-material-kit"
                                    class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4">{{ $t('contactMe') }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="d-flex flex-column w-100 text-center p-5 mb-3">
                    <h3>{{ $t('buildTech') }}</h3>
                    <div class="d-flex justify-content-center mt-3 flex-wrap">
                        <img :src="logoVue" alt="title" loading="lazy" :style="{ height: '200px' }"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" :title="$t('vueJs')" />
                        <img :src="logoBootstrap" alt="title" loading="lazy" :style="{ height: '200px' }"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" :title="$t('bootstrap')" />
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 ms-auto">
                        <h4 class="mb-1">{{ $t('connect.title') }}</h4>
                        <p class="lead mb-0">{{ $t('connect.subtitle') }}</p>
                    </div>
                    <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
                        <MaterialSocialButton route="https://www.linkedin.com/in/chenlian" component="linkedin"
                            color="linkedin" label="LinkedIn" />
                        <MaterialSocialButton route="https://github.com/randysetiawan" component="github" color="github"
                            label="GitHub" />
                        <MaterialSocialButton route="https://www.instagram.com/chenlian07" component="instagram"
                            color="instagram" label="Instagram" />
                    </div>
                </div>
            </div>
        </div>
        <PresentationContactUs />
    </div>
    <!-- <DefaultFooter /> -->
    <PresentationFooter />
</template>
