import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './DetailsAccordion.css';

const DetailsAccordion = () => {
    return (
        <div className="mb-3">
            <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Delivery</Accordion.Header>
                <Accordion.Body>
                <Table striped bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                        <th>Delivery Option</th>
                        <th>Delivery Times</th>
                        <th>Delivery Costs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>UK Saver Delivery</td>
                        <td>3 - 5 Working Days</td>
                        <td>£3.99</td>
                        </tr>
                        <tr>
                        <td>UK Next Day Delivery</td>
                        <td>Next Day Delivery if ordered before 10PM Sun - Fri / 9PM Sat</td>
                        <td>£5.99</td>
                        </tr>
                        <tr>
                        <td>Click & Collect</td>
                        <td>2 - 3 Working Days</td>
                        <td>£4.99</td>
                        </tr>
                        <tr>
                        <td>PLT Royalty Delivery*</td>
                        <td>Next Day Delivery if ordered before 10PM Sun - Fri / 9PM Sat</td>
                        <td>£9.99</td>
                        </tr>
                    </tbody>
                </Table>
                <p className="my-3"><small>Please note estimated shipping times include processing time at the warehouse and are calculated from the date the order is placed. You may receive a next day delivery dispatch email as late as 12:30am on the day your delivery is expected</small></p>
                <Table className="my-3" striped bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                        <th>EU STANDARD DELIVERY</th>
                        <th>Delivery Times</th>
                        <th>DELIVERY COST GBP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>All EU Countries</td>
                        <td>5 - 10 Working Days (Excludes weekends).</td>
                        <td>£6.99</td>
                        </tr>
                    </tbody>
                </Table>
                <Table className="my-3" striped bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                        <th>EU EXPRESS DELIVERY</th>
                        <th>Delivery Times</th>
                        <th>DELIVERY COST GBP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>UK</td>
                        <td rowSpan={3}></td>
                        <td>£3.99</td>
                        </tr>
                        <tr>
                        <td>Belgium</td>
                        <td>£3.99</td>
                        </tr>
                        <tr>
                        <td>Norway</td>
                        <td>£3.99</td>
                        </tr>
                        <tr>
                        <td>Germany</td>
                        <td>2 working days (Excludes Weekends).</td>
                        <td>£3.99</td>
                        </tr>
                        <tr>
                        <td>Netherlands</td>
                        <td rowSpan={3}></td>
                        <td>£3.99</td>
                        </tr>
                        <tr>
                        <td>Sweden</td>
                        <td>£3.99</td>
                        </tr>
                        <tr>
                        <td>Spain</td>
                        <td>£3.99</td>
                        </tr>
                        <tr>
                        <td>Switzerland</td>
                        <td>2 Working Days (Excludes Weekends).</td>
                        <td>£3.99</td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Returns</Accordion.Header>
                <Accordion.Body>
                <p>Due to the current circumstances surrounding COVID-19 we are extending our returns periods. All orders (subject to our returns policy) can be returned up to 28 days after the date of purchase.</p>
                <p>We've gone paperless! You'll now no longer receive a delivery note in your parcel. Don’t worry – Returns are still quick, easy and free.
</p>
                <p>Please note, we cannot offer refunds on beauty, pierced jewellery or on swimwear if the hygiene seal is not in place or has been broken.</p>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default DetailsAccordion;