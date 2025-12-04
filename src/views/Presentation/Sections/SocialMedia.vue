<script setup>
//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";
</script>

<template>
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
</template>