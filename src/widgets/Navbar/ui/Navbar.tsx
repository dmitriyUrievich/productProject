import { classNames } from 'shared/lib/className/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }:NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                to="/"
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
            >
                Главная
            </AppLink>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/about"
            >
                About
            </AppLink>
        </div>

    </div>
);
