const Button = ({
    label,
    onClickHandler,
    type = 'button',
    variant = 'primary',
    className,
}) => {
    return (
        <button
            className={`button button-${variant} ${className}`}
            type={type}
            onClick={onClickHandler}
        >
            {label}
        </button>
    );
}

export default Button;
