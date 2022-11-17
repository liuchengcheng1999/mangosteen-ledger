import { defineComponent, Fragment, ref} from "vue";

export const App = defineComponent({
  setup() {
      const refCount = ref(0)
      const onClick = () => {
        refCount.value += 1
      }
      return () => <Fragment>
      <div>
        {refCount.value}
      </div>
      <div>
        <button onClick={onClick}>+1</button>
      </div>
    </Fragment>
  }
  
});
