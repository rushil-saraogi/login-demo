import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.scss";

const Dashboard = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			.then(posts => setPosts(posts.slice(0, 20)));
	}, []);

	return (
		<div className={styles.dashboard}>
			<h1>Posts</h1>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Dashboard;
