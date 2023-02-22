import { classNames } from 'shared/lib/className/classNames'
import './Loader.scss'

interface loaderProps {
    className?: string;
}

export const Loader = ({ className }:loaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
)
