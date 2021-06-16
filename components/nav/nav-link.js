import Link from 'next/link';

const NavLink = (props) => {
    const {location, name}
    return (
        <a>
            <Link href={location}>{name}</Link>
        </a>
    )
}

export default NavLink
