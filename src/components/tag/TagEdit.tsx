import { defineComponent, reactive } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Rules, validate } from '../../shared/validate';
import { Icon } from '../../shared/Icon';
import { TagForm } from './TagForm';
import { Button } from '../../shared/Button';
import s from './Tag.module.scss';
export const TagEdit = defineComponent({
    setup: (props, context) => {
        const formData = reactive({
          name: '',
          sign: '',
        })
        const errors = reactive<{[k in keyof typeof formData]?: string[]}>({})
        const onSubmit = (e: Event) => {
          const rules: Rules<typeof formData> = [
            { key: 'name', type: 'required', message: '必填' },
            { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
            { key: 'sign', type: 'required', message: '必填' },
          ]
          Object.assign(errors, {
            name: undefined,
            sign: undefined
          })
          Object.assign(errors, validate(formData, rules))
          e.preventDefault()
        }
        return () => (
          <MainLayout>
            {{
            title: () => '新建标签',
            icon: () => <Icon name="left" onClick={() => { }} />,
            default: () => <>
                <TagForm />
                <div class={s.actions}>
                    <Button level='danger' class={s.removeTags} onClick={() => {}}>删除标签</Button>
                    <Button level='danger' class={s.removeTagsAndItems} onClick={() => {}}>删除标签和记账</Button>
                </div>
            </>
          }}
          </MainLayout>
        )
      }
})