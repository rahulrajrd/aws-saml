<template>
  <v-app-bar clipped-left fixed app class="pr-1" flat>
    <v-toolbar-title
      v-text="title"
      @click="redirectToHome"
      class="top-navigation__title"
    />
    <v-spacer />
  </v-app-bar>
</template>
<script lang="ts">
import BaseComponent from "@/shared/BaseComponent";
import { Component } from "nuxt-property-decorator";
@Component({
  name: "top-navigation",
  components: {},
})
export default class TopNavigation extends BaseComponent {
  private title: string = "AWS";

  private redirectToHome(): void {
    this.$router.push("/");
  }
}
</script>
<style lang="scss">
.top-navigation {
  &__title {
    cursor: pointer;
  }
}
</style>
