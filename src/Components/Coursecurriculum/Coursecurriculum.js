import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Coursecurriculumlist from '../../Data/Coursecurriculumlist';
import './Coursecurriculum.css'

export default function Coursecurriculum() {
    return (
        <div className='course-curriculum'>
            <Accordion>
                {
                    Coursecurriculumlist.map(
                        ({ chapter, lectures }, index) => (
                            <AccordionItem key={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className='chapter-details'>
                                            <div className='chapter-details-heading'>
                                                <h5>{`${index+1}- ${chapter}`}</h5>
                                            </div>
                                            <div className="chapter-section-count">
                                                <p>{`${lectures.length} Lectures`}</p>
                                            </div>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className='chapter-sections'>
                                        {
                                            lectures.map(
                                                ({ name, link, duration }, index) => (
                                                    <a href={link} key={index}>
                                                        <div className='curriculum-left'>
                                                            <div className='play-icon'>
                                                                <i class="fa-solid fa-play"></i>
                                                            </div>

                                                            <p>{name}</p>
                                                        </div>
                                                        <div className='curricultm-right'>
                                                            <span>
                                                                {
                                                                    Object.values(duration).join(':').concat(' minutes')
                                                                }
                                                            </span>
                                                        </div>
                                                    </a>
                                                )
                                            )
                                        }
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    )
                }
            </Accordion>
        </div>
    )
}
