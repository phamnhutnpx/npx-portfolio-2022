import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';

import { Experience } from '../data/experience';
const Timeline = () => {
    return (
        <section className="">
            <VerticalTimeline>
                {Experience && Experience.map((item) => (

                    <VerticalTimelineElement
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(21,24,34)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(21,24,34)' }}
                        date={item.date}
                        iconStyle={{ background: 'rgb(21,24,34)', color: '#fff' }}
                        icon={item.iconsSrc}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                        <p>{item.description}</p>
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
        </section>
    )
}

export default Timeline