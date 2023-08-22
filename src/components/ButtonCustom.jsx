export const ButtonCustom = ({label,className,onClick,name})=>{
    return(
        <button name={name} id={name} onClick={onClick} className={className}>{label}</button>
    )
}