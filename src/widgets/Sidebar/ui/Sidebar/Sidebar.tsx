import {classNames} from "shared/lib/className/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwittcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div
            className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>

            <button onClick={onToggle}>Collapse</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};



