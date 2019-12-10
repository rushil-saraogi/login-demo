export function register(username) {
	return new Promise(resolve =>
		resolve({
			status: 200,
			message: "Registered successfully",
			data: { username }
		})
	);
}
