type ButtonType = 'button' | 'submit' | 'reset';

enum Variant {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface ButtonProps {
    buttonType?: ButtonType;
    onClick?: () => void;
    disabled?: boolean;
    variant?: Variant;
    children?: React.ReactNode;
}


const Button: React.FC<ButtonProps> = ({buttonType = 'button', onClick, disabled = false, variant = Variant.Primary, children,})=> {
    return (
       <>
       <button type={buttonType} onClick={onClick} disabled={disabled} className={`button ${variant.toLowerCase()}`}>{children}</button>
       </>
    )
}

export default Button;
export {Variant};