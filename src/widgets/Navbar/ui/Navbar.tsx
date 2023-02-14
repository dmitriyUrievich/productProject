import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/className/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/appLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar,{},[className])}>
            <div className={cls.links}>
                <AppLink
                    to='/'
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}>Главная</AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to='/about'
                >About</AppLink>
            </div>

        </div>
    );
};









