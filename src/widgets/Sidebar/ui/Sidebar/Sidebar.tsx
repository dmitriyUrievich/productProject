import { classNames } from 'shared/lib/className/classNames'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwittcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/ui/Button'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()
    const onToggle = () => {
        setCollapsed((prevState) => !prevState)
    }
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >

            <Button
                onClick={onToggle}
                data-testid="toggleSidebar"
            >
                {t('Collapse')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
