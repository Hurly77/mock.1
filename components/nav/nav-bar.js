import NavLink from './nav-link';

const NavBar = (props) => {
	const { links, logo } = props;

	return (
		<div>
			<h1>{logo}</h1>
			<ul>
				{links.map((link) => (
					<li>
						<NavLink location={link.location} name={link.name}/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavBar;
