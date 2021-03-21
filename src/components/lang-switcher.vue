<template>
  <div id="locale-switcher">
    <span
      id="separate"
      :class="{ active: $i18n.locale == 'en' }"
      @click="setLocale('en')"
      >EN</span
    >
    <span @click="setLocale('fr')" :class="{ active: $i18n.locale == 'fr' }"
      >FR</span
    >
  </div>
</template>

<script>
import i18n from "../i18n";
export default {
  components: {},
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$root.translate = i18n.global.getLocaleMessage(locale);
      this.setCookie("lang", locale, { secure: true, "max-age": 3600000 });
    },
    getCookie(name) {
      let matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            // eslint-disable-next-line no-useless-escape
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    setCookie(name, value, options = {}) {
      options = {
        path: "/",
        // add other defaults here if necessary
        ...options
      };

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }

      let updatedCookie =
        encodeURIComponent(name) + "=" + encodeURIComponent(value);

      for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }

      document.cookie = updatedCookie;
    },
    deleteCookie(name) {
      this.setCookie(name, "", {
        "max-age": -1
      });
    }
  },
  data: function() {
    return {};
  },
  mounted() {
    let langCookie = this.getCookie("lang");
    if (langCookie != undefined && langCookie != null) {
      this.setLocale(langCookie);
    } else {
      this.setCookie("lang", process.env.VUE_APP_I18N_LOCALE, {
        secure: true,
        "max-age": 3600000
      });
    }
  }
};
</script>
