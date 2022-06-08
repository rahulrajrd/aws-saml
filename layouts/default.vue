<template>
  <v-app>
    <top-navigation />
    <v-main class="ma-2">
      <Nuxt />
    </v-main>
    <footer-navigation is-fixed="true" />
  </v-app>
</template>

<script lang="ts">
import { Component } from "nuxt-property-decorator";
import BaseComponent from "../shared/BaseComponent";
import FooterNavigation from "../components/layouts/FooterNavigation.vue";
import TopNavigation from "../components/layouts/TopNavigation.vue";

@Component({
  name: "default-layout",
  components: {
    FooterNavigation,
    TopNavigation,
  },
})
export default class DefaultLayout extends BaseComponent {}
</script>
