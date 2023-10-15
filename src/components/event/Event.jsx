import Skeleton from "../skeleton/Skeleton"
import './Event.css'

import samplePoster from '../../assets/img.jpg'
import classNames from "classnames"
import { useEffect, useRef } from "react"
import { HiLocationMarker } from "react-icons/hi"
import { BsCalendarEvent, BsClock } from "react-icons/bs"
import { formatDate } from "../../utils"

const example = {
    eventId: '1',
    eventName: 'lorem ipsum festival',
    startDate: '2020-10-20',
    endDate: '2020-10-20',
    eventLocation: 'Abuja',
    // eventPoster: samplePoster,
    startTime: '12:00:00',
    endTime: '14:00:00',
    eventTags: [
        { id: '1', name: 'tech' },
        { id: '2', name: 'people' },
        { id: '11', name: 'work' }
    ],
    eventDescription: "Everything lorem ipsum dolor sit amet blah blah blah",
    ticketType: 'VIP',
    ticketCapacity: null,
    ticketPrice: 5000
}

export default function Event() {
    const {
        eventId,
        eventName,
        eventLocation,
        startDate,
        endDate,
        startTime,
        endTime,
        eventPoster,
        eventTags,
        eventDescription,
        ticketType,
        ticketPrice
    } = example,
        loading = false

    const posterRef = useRef()

    if (loading) return <EventSkeleton />

    // useEffect(() => {
    //     posterRef.current.addEventListener('mousemove', e => {
    //         const rect = posterRef.current.getBoundingClientRect(),
    //             x = e.clientX - rect.left
    //         let y
    //         x < rect.left / 2 ? y = 2 : y = -2
    //         posterRef.current.style.setProperty('--mouse-x', `${y}px`)
    //     })
    // }, [])

    return (
        <>
            <EventSkeleton />

            <div className="eventCard">
                <div
                    className="eventCardPoster"
                    ref={ posterRef }
                >
                    <img src={ eventPoster || 'https://source.unsplash.com/random/?event' } alt="event poster" loading="lazy" />
                    <span className={ classNames('ticketType cardTopItem', ticketType) }>
                        { ticketType }
                    </span>
                    <span className="cardTopItem ticketPrice">{ ticketPrice > 0 ? `₦${ticketPrice.toLocaleString()}` : 'FREE' }</span>
                    <ul className="eventTags">
                        { eventTags?.map(tag => (<li className="eventTag" key={ tag.id }>{ tag.name }</li>)) }
                    </ul>
                    <span className="cardTopItem location"><span>{ <HiLocationMarker className="infoIcon" /> }</span>{ eventLocation }</span>
                </div>
                <div className="eventCardTxt">
                    <h3 className="eventTitle">{ eventName }</h3>

                    <div className="eventInfo">
                        <p>
                            <span>
                                { <BsCalendarEvent className="infoIcon" /> }
                            </span>
                            { formatDate(startDate) }
                        </p>
                        <span>|</span>
                        <p>
                            <span>
                                { <BsClock className="infoIcon" /> }
                            </span>
                            { }
                        </p>
                    </div>

                </div>
                <div>
                    <button>More details</button>
                </div>
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
                color={ 'black' }
                speed={ 'slow' }
            >
                <Skeleton
                    customStyle={ 'price' }
                />
                <div className="tags">
                    <Skeleton
                        customStyle={ 'tag' }
                        color={ 'light' }
                        speed={ 'fast' }
                    />
                    <Skeleton
                        customStyle={ 'tag' }
                        color={ 'light' }
                        speed={ 'fast' }
                    />
                </div>

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