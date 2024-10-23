const Auth = () => {
	return (
		<main className='w-full h-screen bg-futGreenBackground'>
			<div className='w-full h-full flex flex-col md:flex-row justify-center items-center'>
				<section className='md:w-2/4 h-2/4 flex justify-center md:justify-end items-center'>
					<h1 className='text-futBlack font-extrabold text-5xl md:text-6xl font-SportsWorld'>
						FutLeague
					</h1>
				</section>
				<section className='md:w-2/4 h-2/4 flex flex-col justify-center items-center md:items-start space-y-4 md:ml-14 lg:ml-52'>
					<a
						href='#'
						className='w-80 h-12 flex justify-center items-center text-futGreenBackground text-xl bg-futBlack rounded-full font-bold'>
						Iniciar sesión
					</a>
					<a
						href='#'
						className='w-80 h-12 flex justify-center items-center text-futBlack text-xl border-2 border-futBlack bg-futGreenBackground rounded-full font-bold'>
						Registrarse como usuario
					</a>
					<a
						href='#'
						className='w-80 h-12 flex justify-center items-center text-futBlack text-xl border-2 border-futBlack bg-futGreenBackground rounded-full font-bold'>
						Registrarse como dueño
					</a>
				</section>
			</div>
		</main>
	);
};

export default Auth;
