<script setup>
import MaterialBadge from "../../../components/MaterialBadge.vue";
</script>
<script>
export default {
    inheritAttrs: false,
    data() {
        return {
            experience: [
                {
                    role: "Full-stack Web Developer",
                    company: "KORINDO Group",
                    period: "March 2024 - March 2025",
                    desc: "Describe your responsibilities here. Pull from your LinkedIn experience section."
                },
                {
                    role: "Mobile Application Developer",
                    company: "KORINDO Group",
                    period: "February 2023 - February 2024",
                    desc: "What did you build? What tools did you use?"
                }
            ],

            education: [
                {
                    school: "BINUS University",
                    degree: "Information Systems, Bachelor of Science",
                    period: "September 2020 - April 2025",
                    desc: "Optional: awards, GPA, notable courses."
                },
                {
                    school: "Notre Dame Senior High School",
                    degree: "Social Sciences, High School Diploma",
                    period: "July 2017 - May 2020",
                    desc: "Optional: awards, GPA, notable courses."
                }
            ],
        }
    }
};
</script>
<template>
    <section class="my-5 py-5">
        <div class="container">
            <div class="row">
                <div class="row justify-content-center text-center my-sm-5">
                    <div class="col-lg-6">
                        <MaterialBadge color="success" class="mb-3">My Journey</MaterialBadge>
                        <h2 class="text-dark mb-0">A timeline of growth and learning</h2>
                        <p class="lead">
                            Roles, studies, and milestones that shaped who I am as a developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-sm-5 mt-3">
            <div class="row">
                <div class="col-lg-6">
                    <!-- EXPERIENCE SECTION -->
                    <h2 class="font-weight-bold mb-5">Professional Journey</h2>
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="card shadow-sm border-radius-lg mb-4" v-for="job in experience" :key="job.role">
                                <div class="card-body">
                                    <h5 class="font-weight-bold mb-1">{{ job.role }}</h5>
                                    <p class="text-primary mb-1">{{ job.company }}</p>
                                    <p class="text-muted small">{{ job.period }}</p>
                                    <p class="mb-0">{{ job.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!-- EXPERIENCE SECTION -->
                    <h2 class="font-weight-bold mb-5">Academic Background</h2>
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="card shadow-sm border-radius-lg mb-4" v-for="edu in education"
                                :key="edu.school">
                                <div class="card-body">
                                    <h5 class="font-weight-bold mb-1">{{ edu.school }}</h5>
                                    <p class="text-primary mb-1">{{ edu.degree }}</p>
                                    <p class="text-muted small">{{ edu.period }}</p>
                                    <p class="mb-0">{{ edu.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
