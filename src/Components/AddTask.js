import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddTask = () => {
    const [task, setTask] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        setTask(data)
        reset()
    };
    const handleDelete = () => {
        setTask({});
        reset()
    }
    return (
        <div className='grid justify-center mt-8'>
            {task ? <li className='text-3xl'>{task.name}</li> : <p></p>}
            {task ? <li className='text-3xl'>{task.description}</li> : <p></p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Task Name" class="input mb-3 input-bordered input-primary w-full max-w-xs" {...register("name", { required: true, maxLength: 40 })} />
                <textarea class="textarea w-full textarea-bordered" placeholder="Description" {...register("description", { pattern: /^[A-Za-z]+$/i })} ></textarea>
                <input class="btn btn-active mx-auto" type="submit" value='Add' />
            </form>
            <button onClick={handleDelete} class="btn btn-active w-48 mx-auto" >X</button>
        </div>
    );
};

export default AddTask;