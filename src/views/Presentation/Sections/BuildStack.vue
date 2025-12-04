<script setup>
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoVue from "@/assets/img/logos/vue.jpg";
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="d-flex flex-column w-100 text-center p-5 mb-3">
                <h3>{{ $t('buildTech') }}</h3>
                <div class="d-flex justify-content-center mt-3 flex-wrap">
                    <img :src="logoVue" alt="title" loading="lazy" :style="{ height: '200px' }" data-bs-toggle="tooltip"
                        data-bs-placement="bottom" :title="$t('vueJs')" />
                    <img :src="logoBootstrap" alt="title" loading="lazy" :style="{ height: '200px' }"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" :title="$t('bootstrap')" />
                </div>
            </div>
        </div>
    </div>
</template>