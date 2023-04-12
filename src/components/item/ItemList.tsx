import { defineComponent, PropType, ref } from 'vue';
import s from './ItemList.module.scss';
import { MainLayout } from '../../layouts/MainLayout';
import { Tab, Tabs } from '../../shared/Tabs';
import { Icon } from '../../shared/Icon';
import { ItemSummary } from './ItemSummary';
export const ItemList = defineComponent({
    props: {
    name: {
        type: String as PropType<string>
    }
},
    setup: (props, context) => {
        const refSelected = ref('本月')
        return() => (
           <MainLayout>
            {{
                title: () => '山竹记账',
                icon: () => <Icon name="menu"/>,
                default: () => (
                    <Tabs classPrefix={'customTabs'} v-model:selected={refSelected.value}>
                        <Tab name="本月">
                            <ItemSummary />
                        </Tab>
                        <Tab name="上月">
                            <ItemSummary />
                        </Tab>
                        <Tab name="今年">
                            <ItemSummary />
                        </Tab>
                        <Tab name="自定义时间">
                            <ItemSummary />
                        </Tab>
                    </Tabs>
                )
            }}
           </MainLayout>
        )
    }
})