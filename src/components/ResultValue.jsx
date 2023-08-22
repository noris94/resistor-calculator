export const ResultValue = ({ohmValue,tolerance})=>{
    return(
        <div className="mt-10">
            <p className="font-bold text-4xl">Resistance Value: </p>
            {ohmValue && <p className="text-2xl font-medium"> {ohmValue} ohms</p>}
            {tolerance && <p className="text-xl font-medium"> Tolerance: ± {tolerance} %</p>}
        </div>
    )
}