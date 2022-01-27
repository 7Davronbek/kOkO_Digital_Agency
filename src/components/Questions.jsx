import { useEffect } from 'react'
import Aos from 'aos';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import 'react-accessible-accordion/dist/fancy-example.css';

const Questions = () => {
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])
    return (
        <>
            <div className="questions">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5 data-aos='fade-right'>FAQ</h5>
                        </div>
                        <div className="col-12">
                            <Accordion>
                                <AccordionItem data-aos='fade-right'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem data-aos='fade-right'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Is free will real or just an illusion?
                    </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                            ea in ut nostrud velit in irure cillum tempor laboris
                                            sed adipisicing eu esse duis nulla non.
                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem data-aos='fade-right'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What harsh truths do you prefer to ignore?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem data-aos='fade-right'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Is free will real or just an illusion?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                            ea in ut nostrud velit in irure cillum tempor laboris
                                            sed adipisicing eu esse duis nulla non.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Questions
