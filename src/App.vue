<script setup>
import { RouterView } from "vue-router"
import { useI18n } from "vue-i18n"
import { watch } from "vue"

const { locale, t } = useI18n()

// Watch for language changes
watch(locale, () => {
  document.title = t("fullName")
})

// Initial set
document.title = t("fullName")
</script>

<template>
  <router-view />
</template>
