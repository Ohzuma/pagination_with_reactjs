const paginate = (followers) => {
	const itemsPerPage = 15;
	const pages = Math.ceil(followers.length / itemsPerPage);

	const newFollower = Array.from({ length: pages }, (_, index) => {
		const start = index * itemsPerPage;
		return followers.slice(start, start + itemsPerPage);
	});
	return newFollower;
};

export default paginate;
