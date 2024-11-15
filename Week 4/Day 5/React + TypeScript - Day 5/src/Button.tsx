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
    className?: string;
}


const Button: React.FC<ButtonProps> = ({buttonType = 'button', onClick, disabled = false, variant = Variant.Primary, children, className = ''})=> {
    return (
       <>
       <button type={buttonType} onClick={onClick} disabled={disabled} className={className}>{children} </button>
       </>
    )
}

export default Button;
export {Variant};