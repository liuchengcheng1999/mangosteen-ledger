import { RouterView } from 'vue-router';
import { defineComponent } from "vue";
export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
        <div><RouterView/></div>
    )
  }
});