import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <div className='grid items-center justify-center mt-8'>
            <Link to='/addtask' class="btn btn-outline btn-success text-2xl"><span className='text-4xl mb-3'>+</span>Add task</Link>
        </div>
    );
};

export default Home;