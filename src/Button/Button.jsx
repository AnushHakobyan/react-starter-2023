const Button = ({
    label,
    onClick,
    type = 'button',
    variant = 'primary',
    className,
}) => {
    return (
        <button
            className={`button button-${variant} ${className}`}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Button;
