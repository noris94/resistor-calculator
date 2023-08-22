export const ResultValue = ({ohmValue})=>{
    return(
        <div className="mt-10">

            {ohmValue && <p className="font-bold text-4xl">Resistance Value: </p>} 
            {ohmValue && <p className="text-2xl font-medium"> {ohmValue} ohms</p>}
        </div>
    )
}