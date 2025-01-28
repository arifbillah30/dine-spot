import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import MayLikeItem from './MayLikeItem';

class ItemsCarousel extends React.Component {

	render() {
    	return (
	      <OwlCarousel nav loop {...options} className="owl-theme owl-carousel-five offers-interested-carousel">
	         <div className="item">
	         	<MayLikeItem 
<<<<<<< HEAD
	         		title='Burger'
	         		price='$500'
=======
	         		title='Putine'
	         		price='2500tk'
>>>>>>> cc02ffd47d9c0190747c13f29ec80efe861bf31d
			   		image='img/list/1.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	         <div className="item">
	         	<MayLikeItem 
<<<<<<< HEAD
	         		title='Sandwiches'
	         		price='$260'
=======
	         		title='Cashew nut salad'
	         		price='2600tk'
>>>>>>> cc02ffd47d9c0190747c13f29ec80efe861bf31d
			   		image='img/list/2.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	         <div className="item">
	         	<MayLikeItem 
<<<<<<< HEAD
	         		title='Soups'
	         		price='$860'
=======
	         		title='Chicken ball'
	         		price='1200tk'
>>>>>>> cc02ffd47d9c0190747c13f29ec80efe861bf31d
			   		image='img/list/3.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	         <div className="item">
	         	<MayLikeItem 
<<<<<<< HEAD
	         		title='Pizzas'
	         		price='$602'
=======
	         		title='Soup'
	         		price='3500tk'
>>>>>>> cc02ffd47d9c0190747c13f29ec80efe861bf31d
			   		image='img/list/4.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	         <div className="item">
	         	<MayLikeItem 
<<<<<<< HEAD
	         		title='Pastas'
	         		price='$360'
=======
	         		title='Combo Package'
	         		price='3500tk'
>>>>>>> cc02ffd47d9c0190747c13f29ec80efe861bf31d
			   		image='img/list/5.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	         <div className="item">
	         	<MayLikeItem 
<<<<<<< HEAD
	         		title='Chinese'
=======
	         		title='Family Combo'
>>>>>>> cc02ffd47d9c0190747c13f29ec80efe861bf31d
	         		price='$760'
			   		image='img/list/6.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	      </OwlCarousel>
	    );
	}
}

const options={
	responsive: {
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    lazyLoad: true,
    pagination: "false",
    loop: true,
    dots: false,
    autoPlay: 2000,
    nav: true,
    navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"]
}

export default ItemsCarousel;