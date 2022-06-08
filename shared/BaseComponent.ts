import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class BaseComponent extends Vue {

  get componentName(): string {
    return this.$options.name || 'base-comp';
  }

  /**
   * elementId
   */
  public elementId(propertyOrAction: string, entityKey?:string): string {
    let componentId:string = this.componentName.concat('-', propertyOrAction);
    if(entityKey != null) {
      return componentId.concat('-',entityKey);
    }
    return componentId;
  }
}