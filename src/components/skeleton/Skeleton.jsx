import classNames from 'classnames'
import './Skeleton.css'

export default function Skeleton({ children, color, speed, customStyle }) {
    return (
        <div className={
            classNames("skeleton",
                color, speed, customStyle)
        }>
            { children }
        </div>
    )
}