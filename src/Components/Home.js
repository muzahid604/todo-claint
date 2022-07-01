import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <div className='text-center'>
            <div className='grid items-center justify-center mt-8'>
                <h1 className='text-4xl'>HELLO WELCOME TO MY TODO APP</h1>
            </div>
            <Link to='/addtask' class=" mt-10 btn btn-outline btn-success text-xl"><span className='text-4xl mb-3'>+</span>Add task</Link>
        </div>
    );
};

export default Home;