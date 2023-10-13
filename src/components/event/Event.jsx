import Skeleton from "../skeleton/Skeleton"
import './Event.css'

export default function Event() {
    return (
        <>
            { <EventSkeleton /> }
            <div className="event">
                {/* <img src="" alt="" /> */ }
            </div>
        </>
    )
}

export function EventSkeleton() {
    return (
        <Skeleton
            customStyle={ 'eventSkeleton' }
            color={ 'light' }
            speed={ 'verySlow' }
        >
            <Skeleton
                customStyle={ 'skeletonImg' }
                color={ 'dark' }
                speed={ 'slow' }
            >
                <Skeleton
                    customStyle={ 'price' }
                />
            </Skeleton>
            <div className="skeletonTxtArea">
                <Skeleton
                    customStyle={ 'skeletonTitle' }
                    color={ 'mid' }
                    speed={ 'fast' }
                />
                {/* description */ }
                <Skeleton
                    customStyle={ 'skeletonTxt' }
                    color={ 'mid' }
                    speed={ 'fast' }
                />
                <Skeleton
                    customStyle={ 'skeletonTxt long' }
                    color={ 'mid' }
                    speed={ 'slow' }
                />

            </div>
            <div className="skeletonBtns">

                {/* amt left */ }
                <Skeleton
                    customStyle={ 'skeletonCta' }
                    color={ 'mid' }
                    speed={ 'fast' }
                />

                {/* buy button */ }
                <Skeleton
                    customStyle={ 'skeletonCta' }
                    color={ 'mid' }
                    speed={ 'fast' }
                />

            </div>
        </Skeleton>
    )
}