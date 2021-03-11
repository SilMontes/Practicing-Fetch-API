import React, { useState, useEffect } from "react";

export function Todos() {
	//initialize the tasks variable to an empty array and hook it to setTasks function
	const [tasks, setTasks] = useState(null);
	//this function useEffect will run only one time, when the component is finally lodaded the first time.
	useEffect(
		() =>
			// here i fetch my todos from the API
			fetch("https://assets.breatheco.de/apis/fake/todos/user/newuser")
				.then(r => r.json()) //convert incoming JSON formated response into an object
				.then(
					data => setTasks(data) //here it re-set the variable tasks with the incoming data
				),
		[] // <---- thanks to this empty array the use effect will be called only once
	);

	//    { useEffect(() => {
	//   async function fetchData() {
	//     // You can await here
	//     const response = await MyAPI.getData(someId);
	//     // ...
	//   }
	//   fetchData();
	// }, [someId]); // Or [] if effect doesn't need props or state
	// }
	const deletetask = i => {
		const updateTask = tasks.filter((item, index) => {
			return index != i;
		});
		setTasks(updateTask);
	};
	return (
		<div className="container">
			<input
				onKeyUp={e =>
					//listen to the key up and wait for the return key to be pressed (KeyCode === 13)
					e.keyCode === 13 &&
					setTasks(
						tasks.concat({ label: e.target.value, done: false })
					)
				}
			/>
			<ul>
				{tasks === null
					? "Loading..."
					: tasks.map((t, i) => {
							return (
								<li key={i} onClick={() => deletetask(i)}>
									{t.label} ({t.done ? "done" : "not done"})
								</li>
							);
					  })}
			</ul>
		</div>
	);
}
