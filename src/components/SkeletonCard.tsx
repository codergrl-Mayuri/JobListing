const SkeletonCard = () => {
    return (
        <div className="w-full h-40 border border-gray-300 shadow-md overflow-hidden rounded-md animate-pulse">
        <div className="p-3 text-left mr-8 ml-2">
          <div className="w-3/4 h-4 bg-gray-300 rounded mb-2 mt-2"></div>
          <div className="flex items-left gap-3">
            <div className="w-full h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="flex justify-start items-center p-3 gap-3 ml-2">
          <div className="w-10 h-10 bg-gray-300 rounded"></div>
          <div className="text-sm text-left flex flex-col gap-1">
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
            <div className="flex items-center gap-2">
              <div className="w-32 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>    
        </div>
      </div>
    );
}

export default SkeletonCard;