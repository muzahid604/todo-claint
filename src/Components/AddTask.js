import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddTask = () => {
    const [task, setTask] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        setTask(data)
        reset()
    };
    const handleDelete = () => {
        setTask([]);
        reset()
    }

    return (
        <div className='grid justify-center mt-8'>
            {task ? <p className='text-3xl my-10'><input type="checkbox" name="" id="" />{task.name
            } <button className='btn-xs btn' onClick={handleDelete}>Delete</button> <br /> <span className='text-xl'>{task.description}</span> </p> : <p></p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Task Name" class="input mb-3 input-bordered input-primary w-full max-w-xs" {...register("name", { required: true, maxLength: 40 })} />
                <textarea class="textarea w-full textarea-bordered" placeholder="Description" {...register("description", { pattern: /^[A-Za-z]+$/i })} ></textarea>
                <input class="btn btn-active mx-auto" type="submit" value='Add' />
            </form>

        </div>
    );
};

export default AddTask;