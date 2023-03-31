import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Coursecurriculum from '../Coursecurriculum/Coursecurriculum';
import Courseinstructor from '../CourseInstructor/Courseinstructor';
import Courseoverview from '../Courseoverview/Courseoverview';
import Reviews from '../Reviews/Reviews';
import './Coursedetailstabs.css'
 
export default function Coursedetailstabs() {
    return (
        <div className='coursetabs-container'>
            <Tabs>
                <TabList className={'tablist'}>
                    <Tab className={'tab'} selectedClassName={'selected-tab'}>Overview</Tab>
                    <Tab className={'tab'} selectedClassName={'selected-tab'}>Curriculum</Tab>
                    <Tab className={'tab'} selectedClassName={'selected-tab'} >Instructor</Tab>
                    <Tab className={'tab'} selectedClassName={'selected-tab'}>Reviews</Tab>
                </TabList>

                <TabPanel className={'tabpanel'}>
                    <Courseoverview />
                </TabPanel>

                <TabPanel className={'tabpanel'}>
                    <Coursecurriculum />
                </TabPanel>

                <TabPanel className={'tabpanel'}>
                    <Courseinstructor />
                </TabPanel>
                
                <TabPanel className={'tabpanel'}>
                    <Reviews />
                </TabPanel>
            </Tabs>
        </div>
    )
}
