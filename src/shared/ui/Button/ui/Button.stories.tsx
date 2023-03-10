import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from './Button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta <typeof Button>
const Template: ComponentStory <typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
}
export const Ounline = Template.bind({})
Ounline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
}
export const OunlineDark = Template.bind({})
OunlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
}
OunlineDark.decorators = [ThemeDecorator(Theme.DARK)]
