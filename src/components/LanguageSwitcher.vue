<template>
  <div class="dropdown">
    <button
      class="btn bg-white text-dark px-3 py-2 dropdown-toggle d-flex align-items-center material-dropdown"
      type="button"
      data-bs-toggle="dropdown"
      style="margin-bottom: 0;margin-left: 1rem;"
    >
      <img :src="currentFlag" class="flag-icon" />
      <i class="material-icons-round ms-2 arrow-icon">expand_more</i>
    </button>

    <ul class="dropdown-menu mt-2 shadow-sm border-radius-lg">
      <li>
        <a class="dropdown-item d-flex align-items-center" @click="setLang('en')">
          <img :src="flags.en" class="flag-icon me-2" /> English
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex align-items-center" @click="setLang('zn')">
          <img :src="flags.zn" class="flag-icon me-2" /> 中文
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: this.$i18n.locale,
      flags: {
        en: new URL('../assets/flags/en.png', import.meta.url).href,
        zn: new URL('../assets/flags/zn.png', import.meta.url).href
      }
    };
  },

  computed: {
    currentFlag() {
      return this.flags[this.current];
    }
  },

  methods: {
    setLang(lang) {
      this.current = lang;
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang);
    },

    detectBrowserLanguage() {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.includes("en")) return "en";
      if (browserLang.includes("zh") || browserLang.includes("cn")) return "zn";
      return "en";
    }
  },

  mounted() {
    const saved = localStorage.getItem("lang");
    if (saved) {
      this.setLang(saved);
      return;
    }
    const auto = this.detectBrowserLanguage();
    this.setLang(auto);
  }
};
</script>

<style scoped>
.flag-icon {
  width: 22px;
  height: 22px;
  border-radius: 3px;
  object-fit: cover;
}

.arrow-icon {
  font-size: 20px;
  transition: transform 0.2s ease;
}

/* Rotate arrow when dropdown is open */
.dropdown.show .arrow-icon {
  transform: rotate(180deg);
}

/* Material hover effect */
.material-dropdown {
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);
  transition: all 0.15s ease;
}

.material-dropdown:hover {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
}

/* Hide Bootstrap arrow */
.dropdown-toggle::after {
  display: none !important;
}
</style>
