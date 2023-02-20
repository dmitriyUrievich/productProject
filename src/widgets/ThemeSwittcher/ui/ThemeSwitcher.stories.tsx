import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from 'widgets/ThemeSwittcher'

export default {
    title: 'Widget/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta <typeof ThemeSwitcher>
const Template: ComponentStory <typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Normal = Template.bind({})
Normal.args = {}
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]