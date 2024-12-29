import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../context/Authprovider';

const Admintasklist = () => {
    const [userdata, setuserdata] = useContext(Authcontext);

    const [taskTitle, settaskTitle] = useState('');
    const [taskDate, settaskDate] = useState('');
    const [employee, setemployee] = useState('');
    const [category, setcategory] = useState('');
    const [taskDescription, settaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            taskTitle,
            taskDate,
            category,
            taskDescription,
            active: false,
            newTask: true,
            completed: false,
            failed: false,
        };

        const updatedUserdata = userdata.map((user) => {
            if (user.firstname === employee) {
                return {
                    ...user,
                    tasks: [...user.tasks, newTask],
                    taskNumbers: {
                        ...user.taskNumbers,
                        newTask: user.taskNumbers.newTask + 1,
                    },
                };
            }
            return user;
        });

        setuserdata(updatedUserdata);
        localStorage.setItem('userdata', JSON.stringify(updatedUserdata));

        // Reset form fields
        setcategory('');
        setemployee('');
        settaskDate('');
        settaskTitle('');
        settaskDescription('');
    };

    useEffect(() => {
        // Load data from local storage (if needed)
        const storedData = JSON.parse(localStorage.getItem('userdata'));
        if (storedData) {
            setuserdata(storedData);
        }
    }, []);

    return (
        <div>
            <div>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="text-white mt-10 flex w-full flex-wrap items-start flex-shrink-0 justify-between"
                >
                    <div className="w-1/2 p-10">
                        <h3 className="font-semibold text-xl mb-1">Task title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => settaskTitle(e.target.value)}
                            className="bg-transparent border-2 border-teal-800 px-10 py-4 w-full rounded-lg"
                            type="text"
                            placeholder="Make a UI design"
                        />
                        <div>
                            <h3 className="font-semibold text-xl mb-1">Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => settaskDate(e.target.value)}
                                className="bg-transparent border-2 border-teal-800 px-10 py-4 w-full rounded-lg"
                                type="date"
                                name=""
                                id=""
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl mb-1">Assign to </h3>
                            <input
                                value={employee}
                                onChange={(e) => setemployee(e.target.value)}
                                className="bg-transparent border-2 border-teal-800 px-10 py-4 w-full rounded-lg"
                                type="text"
                                placeholder="(please use employee name : Rajesh, Priya, Ankit, Sneha, Kunal)"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl mb-1">Category</h3>
                            <input
                                value={category}
                                onChange={(e) => setcategory(e.target.value)}
                                className="bg-transparent border-2 border-teal-800 px-10 py-4 w-full rounded-lg"
                                type="text"
                                placeholder="Design, Dev, etc."
                            />
                        </div>
                    </div>
                    <div className="w-1/2 p-5">
                        <h3 className="font-semibold text-xl mb-1">Description</h3>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => settaskDescription(e.target.value)}
                            className="bg-transparent border-2 border-teal-800 px-10 py-4 w-full rounded-lg"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>

                    <button className="bg-red-700 border-2 border-teal-800 px-10 py-4 w-full rounded-lg">
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admintasklist;
