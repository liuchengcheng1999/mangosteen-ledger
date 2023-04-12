import { defineComponent, PropType } from 'vue';
import s from './ItemSummary.module.scss';
export const ItemSummary = defineComponent({
    props: {
    name: {
        type: String as PropType<string>
    }
},
    setup: (props, context) => {
        return() => (
            <div class={s.wrapper}>summary</div>
        )
    }
})