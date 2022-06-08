<template>
  <v-footer
    :absolute="!isFixed"
    app
  >
  <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>
<script lang="ts">
import BaseComponent from "@/shared/BaseComponent";
import { Component, Prop } from "nuxt-property-decorator";
@Component({
  name: 'footer-navigation',
  components: {
  }
})
export default class FooterNavigation extends BaseComponent {

  @Prop({ required: true, default:true })
  public isFixed: boolean;

}

</script>
<style lang="scss"> </style>