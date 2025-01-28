import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Image,Table} from 'react-bootstrap';
import Icofont from 'react-icofont';
import HeadingValue from './common/HeadingValue';
import PageTitle from './common/PageTitle';

class Invoice extends React.Component {

	render() {
    	return (
    		<>
    			<PageTitle 
	    			title="Invoice"
	    			subTitle="Order #25102589748"
	    		/>
		      <section className="section pt-5 pb-5">
		         <Container>
		            <Row>
		               <Col md={8} className="mx-auto">
		                  <div className="p-5 Dine-invoice bg-white shadow-sm">
		                     <Row className="mb-5 pb-3">
		                        <Col md={8} xs={10}>
		                           <h3 className="mt-0">Thanks for choosing <strong className="text-secondary">Dinespot Eat</strong>, Rakib! Here are your order details: </h3>
		                        </Col>
		                        <Col md={4} xs={2} className="pl-0 text-right">
		                           <p className="mb-4 mt-2">
		                              <Link className="text-primary font-weight-bold" to="#"><Icofont icon="clock-print"/> PRINT</Link>
		                           </p>
		                           <Image alt="logo" src="/img/favicon.png" />
		                        </Col>
		                     </Row>
		                     <Row>
		                        <Col md={6}>
		                           <HeadingValue 
		                           		heading='Order No:'
		                           		value='#25102589748'
		                           		className="text-black"
		                           />
		                           <HeadingValue 
		                           		heading='Order placed at:'
		                           		value='12/11/2018, 06:26 PM'
		                           />
		                           <HeadingValue 
		                           		heading='Order delivered at:'
		                           		value='12/11/2018, 07:18 PM'
		                           />
		                           <HeadingValue 
		                           		heading='Order Status:'
		                           		value='Delivered'
		                           		valueClassName='text-success'
		                           />
		                        </Col>
		                        <Col md={6}>
		                           <HeadingValue 
		                           		heading='Delivery To:'
		                           		className="text-black"
		                           />
		                           <HeadingValue 
		                           		className="text-primary"
		                           		value=' Sakib Mahmud '
		                           />
		                           <HeadingValue 
		                           		heading='House 291/d, road no.9, Haji Camp, Uttara, Dhaka,
		                               Bangladesh'
		                           />
		                        </Col>
		                     </Row>
		                     <Row className="mt-5">
		                        <Col md={12}>
		                           <HeadingValue 
		                           		heading='Ordered from:'
		                           />
		                           <h6 className="mb-1 text-black"><strong>Rakib Hossain</strong></h6>
		                           <HeadingValue 
		                           		heading='Shop 3, Model Town Extension, Banani 12 Dhaka'
		                           />
		                           <Table className="mt-3 mb-0">
		                              <thead className="thead-light">
		                                 <tr>
		                                    <th className="text-black font-weight-bold" scope="col">Item Name</th>
		                                    <th className="text-right text-black font-weight-bold" scope="col">Quantity</th>
		                                    <th className="text-right text-black font-weight-bold" scope="col">Price</th>
		                                 </tr>
		                              </thead>
		                              <tbody>
		                                 <tr>
		                                    <td>Veg Masala Roll</td>
		                                    <td className="text-right">01</td>
		                                    <td className="text-right">1200Tk</td>
		                                 </tr>
		                                 <tr>
		                                    <td>Burger-Combo</td>
		                                    <td className="text-right">01</td>
		                                    <td className="text-right">1500Tk</td>
		                                 </tr>
		                                 <tr>
		                                    <td>Veg Pasta in Red Sauce</td>
		                                    <td className="text-right">01</td>
		                                    <td className="text-right">1300Tk</td>
		                                 </tr>
		                                 <tr>
		                                    <td className="text-right" colSpan="2">Item Total:</td>
		                                    <td className="text-right"> 2500Tk</td>
		                                 </tr>
		                                 <tr>
		                                    <td className="text-right" colSpan="2">VAT:</td>
		                                    <td className="text-right"> 607Tk</td>
		                                 </tr>
		                                 <tr>
		                                    <td className="text-right" colSpan="2">Delivery Charges:</td>
		                                    <td className="text-right"> 100Tk</td>
		                                 </tr>
		                                 <tr>
		                                    <td className="text-right" colSpan="2">Discount Applied (DINESPOT30):</td>
		                                    <td className="text-right">1597.45Tk</td>
		                                 </tr>
		                                 <tr>
		                                    <td className="text-right" colSpan="2">
		                                       <h6 className="text-success">Grand Total:</h6>
		                                    </td>
		                                    <td className="text-right">
		                                       <h6 className="text-success"> 7207Tk</h6>
		                                    </td>
		                                 </tr>
		                              </tbody>
		                           </Table>
		                        </Col>
		                     </Row>
		                  </div>
		               </Col>
		            </Row>
		         </Container>
		      </section>
		    </>
    	);
    }
}


export default Invoice;