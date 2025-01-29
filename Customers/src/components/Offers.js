import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import PageTitle from './common/PageTitle';
import CouponCard from './common/CouponCard';
import BankOffers from './common/BankOffers';

class Offers extends React.Component {

	render() {
    	return (
    		<>
	    		<PageTitle 
	    			title="Offers for you"
	    			subTitle="Explore top deals and offers exclusively for you!"
	    		/>
	    		<section className="section pt-5 pb-5">
			         <Container>
			            <Row>
			               <Col md={12}>
			                  <h4 className="font-weight-bold mt-0 mb-3">Available Coupons</h4>
			               </Col>
			               <Col md={4}>
			               	  <CouponCard 
								  title= 'Get 50% OFF on your first osahan eat order'
								  logoImage= 'img/bank/1.png'
								  subTitle= 'Use code DINESPOT50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: 3000Tk'
								  copyBtnText= 'COPY CODE'
								  couponCode= 'DINESPOT50'
			               	  />
			               </Col>
			               <Col md={4}>
			               	  <CouponCard 
								  title= 'Get 50% OFF on your first osahan eat order'
								  logoImage= 'img/bank/2.png'
								  subTitle= 'Use code EAT730 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: 12000Tk'
								  copyBtnText= 'COPY CODE'
								  couponCode= 'EAT730'
			               	  />
			               </Col>
			               <Col md={4}>
			               	  <CouponCard 
								  title= 'Get 50% OFF on your first dinespot eat order'
								  logoImage= 'img/bank/3.png'
								  subTitle= 'Use code SAHAN50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: 3000Tk'
								  copyBtnText= 'COPY CODE'
								  couponCode= 'DINE20'
			               	  />
			               </Col>
			               <Col md={4}>
			               	  <CouponCard 
								  title= 'Get 50% OFF on your first dinespot eat order'
								  logoImage= 'img/bank/4.png'
								  subTitle= 'Use code Bkash#20 & get 50% off on your first dinespot order on Website and Mobile site. Maximum discount: 3500.00Tk'
								  copyBtnText= 'COPY CODE'
								  couponCode= 'Hungary50'
			               	  />
			               </Col>
			               <Col md={4}>
			               	  <CouponCard 
								  title= 'Get 50% OFF on your first osahan eat order'
								  logoImage= 'img/bank/5.png'
								  subTitle= 'Use code OSAHANEAT50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: 6700.00Tk'
								  copyBtnText= 'COPY CODE'
								  couponCode= 'PAYBKASH50'
			               	  />
			               </Col>
			               <Col md={4}>
			               	  <CouponCard 
								  title= 'Get 50% OFF on your first osahan eat order'
								  logoImage= 'img/bank/6.png'
								  subTitle= 'Use code OSAHANEAT50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: 3500.00Tk'
								  copyBtnText= 'COPY CODE'
								  couponCode= 'Hungary50'
			               	  />
			               </Col>
			            </Row>
			            <Row className="pt-5">
			               <Col xs={12}>
			                  <h4 className="font-weight-bold mt-0 mb-3">Bank Offers</h4>
			               </Col>
			               <Col md={6}>
			               	<BankOffers 
			               		title= 'Get flat 18% cashback using Cards'
								logoImage= 'img/bank/7.png'
								imageclassName= 'card-img'
								subTitle= 'Get flat 14% cashback on orders above 18% for 10 orders. No code required.'
			               	/>
			               </Col>
			               <Col md={6}>
			               	<BankOffers 
			               		title= 'Get flat 10% cashback using Master Card'
								logoImage= 'img/bank/8.png'
								imageclassName= 'card-img'
								subTitle= 'Get flat 6% cashback on orders above 10% for 10 orders. No code required.'
			               	/>
			               </Col>
			            </Row>
			         </Container>
			    </section>
	    	</>
    	);
    }
}


export default Offers;