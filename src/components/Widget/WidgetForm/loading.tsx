import { FaCircleNotch } from "react-icons/fa"

export const Loading = () => {
    return (
        <div className="w-6 h-6 flex items-center justify-center overflow-hidden text-brand-400" >
            <FaCircleNotch size={16} className="animate-spin" />
        </div>
    )
}