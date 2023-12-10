const Home = () => {
	const wrapper =
		'flex h-screen justify-center items-center select-none';
	const content = 'flex items-center';
	return (
		<div className={wrapper}>
			<div className={content}>
				<div className='flex items-center flex-col'>
					<h1>
						React Tailwind Template
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
