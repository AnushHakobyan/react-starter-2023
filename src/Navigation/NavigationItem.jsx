const NavigationItem = ({ label }) => {
    return (
        <li
            className="navigationItem"
            onClick={() => alert(`Navigating to ${label}`)}
        >
            {label}
        </li>
    );
}

export default NavigationItem;
