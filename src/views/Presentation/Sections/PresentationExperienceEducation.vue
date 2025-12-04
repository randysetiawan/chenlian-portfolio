<script setup>
import MaterialBadge from "../../../components/MaterialBadge.vue";

defineProps({
    data: {
        type: Object,
        required: true,
        experience: {
            type: Array,
            required: true
        },
        education: {
            type: Array,
            required: true
        }
    }
})
</script>
<script>
export default {
    inheritAttrs: false,
};
</script>
<template>
    <section id="experience" class="my-5 py-5">
        <div class="container">
            <div class="row">
                <div class="row justify-content-center text-center my-sm-5">
                    <div class="col-lg-6">
                        <MaterialBadge color="success" class="mb-3">{{ $t('experience.badge') }}</MaterialBadge>
                        <h2 class="text-dark mb-0">{{ $t('experience.title') }}</h2>
                        <p class="lead">
                            {{ $t('experience.subtitle') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-sm-5 mt-3">
            <div class="row">
                <div class="col-lg-6">
                    <!-- EXPERIENCE SECTION -->
                    <h3 class="font-weight-bold mb-5">{{ $t('experience.titleLeft') }}</h3>
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="card shadow-sm border-radius-lg mb-4" v-for="job in data.experience"
                                :key="job.role">
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <!-- LEFT SIDE -->
                                    <div>
                                        <h5 class="font-weight-bold mb-1">{{ $t(job.role) }}</h5>
                                        <p class="text-success font-weight-bold mb-1">{{ $t(job.company) }}</p>
                                        <p class="text-muted small mb-2">
                                            {{
                                                $i18n.locale === 'en'
                                                    ? `${$t(job.startMonth)} ${job.startYear} - ${$t(job.endMonth)}
                                            ${job.endYear}`
                                                    : `${job.startYear}年${$t(job.startMonth).replace('月', '')}月 -
                                            ${job.endYear}年${$t(job.endMonth).replace('月', '')}月`
                                            }}
                                        </p>
                                        <p class="mb-0">{{ $t(job.desc) }}</p>
                                    </div>
                                    <!-- RIGHT SIDE: COMPANY LOGO -->
                                    <img v-if="job.logo" :src="job.logo" alt="Company Logo" class="ms-3"
                                        style="width: 55px; height: 55px; object-fit: contain;" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!-- ACADEMIC SECTION -->
                    <h3 class="font-weight-bold mb-5">{{ $t('experience.titleRight') }}</h3>
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="card shadow-sm border-radius-lg mb-4" v-for="edu in data.education"
                                :key="edu.school">
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <!-- LEFT SIDE -->
                                    <div>
                                        <h5 class="font-weight-bold mb-1">{{ $t(edu.school) }}</h5>
                                        <p class="text-success font-weight-bold mb-1">{{ $t(edu.degree) }}</p>
                                        <p class="text-muted small mb-2">
                                            {{
                                                $i18n.locale === 'en'
                                                    ? `${$t(edu.startMonth)} ${edu.startYear} - ${$t(edu.endMonth)}
                                            ${edu.endYear}`
                                                    : `${edu.startYear}年${$t(edu.startMonth).replace('月', '')}月 -
                                            ${edu.endYear}年${$t(edu.endMonth).replace('月', '')}月`
                                            }}
                                        </p>
                                        <p class="mb-0">{{ $t(edu.desc) }}</p>
                                    </div>
                                    <!-- RIGHT SIDE: SCHOOL LOGO -->
                                    <img v-if="edu.logo" :src="edu.logo" alt="School Logo" class="ms-3"
                                        style="width: 55px; height: 55px; object-fit: contain;" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
