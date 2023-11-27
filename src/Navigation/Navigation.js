import NavigationItem from './NavigationItem';

const navigationItems = [
    {
        label: 'Dashboard',
    },
    {
        label: 'Transactions',
    },
    {
        label: 'Invoices',
    }
]

const Navigation = () => (
    <nav className="leftNavigation">
        {/*<img src="" alt="" />*/}
        <ul className="navigationContainer">
            {
                navigationItems.map(({ label }) => (
                    <NavigationItem label={label} key={label} />
                ))
            }
        </ul>
    </nav>
);

export default Navigation;
