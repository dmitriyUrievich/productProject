import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink'

export default {
    title: 'Widget/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta <typeof AppLink>
const Template: ComponentStory <typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
}
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
}
