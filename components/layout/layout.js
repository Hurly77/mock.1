import NavBar from '@/nav/NavBar';
import Footer from './footer';

const Layout = (props) => {
	const { children } = props;
	const links = [{location="/profile", name="profile"}, {location="/clubs", name="Clubs"}, {location="/org", name="USC"}]
	return (
		<div>
			<NavBar links={links} />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
