<script setup>
import wavesWhite from "@/assets/img/waves-white.svg";
</script>

<template>
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
                            <a href="#contact-me" class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4">{{
                                $t('contactMe') }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>