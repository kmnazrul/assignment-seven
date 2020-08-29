import React, { useState } from 'react';
import './Courses.css';
import fakeData from '../../fakeData/fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Courses = () => {
    const data = fakeData.slice(0,15);
    const [course, setCourse] = useState(data);
    const [cart, setCart] = useState([]);

    const enrollBtn = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="course-container main">
            <div className='course row row-cols-1 row-cols-lg-3 row-cols-sm-2'>
               {
                   course.map(course => <Product
                    enrollBtn = {enrollBtn} 
                    course={course}></Product>)
               }
               
            </div>
            <div className='cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;