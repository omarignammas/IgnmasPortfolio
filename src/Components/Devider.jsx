
const Devider = () => {

    return(
        <div className="relative w-full h-[3px] shadow-purple-400 mb-7 my-6">
        {/* Gradient Divider */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-purple-500 to-transparent
            transition-all duration-300
            opacity-60 hover:opacity-100 
          "
        />
      </div>

    )
}

export default Devider;