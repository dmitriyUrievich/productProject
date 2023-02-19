import { classNames } from 'shared/lib/className/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    {t('O нас')}
                </AppLink>
            </div>

        </div>
    )
}
