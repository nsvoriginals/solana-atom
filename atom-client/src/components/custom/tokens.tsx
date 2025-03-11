const TokenCard = ({ name, symbol, supply, decimals, logo }) => {
    return (
      <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg shadow-sm w-full">
        {/* Token Logo */}
        <div className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full">
          {logo ? (
            <img src={URL.createObjectURL(logo)} alt={name} className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-gray-500 text-sm">No Logo</span>
          )}
        </div>
  
   
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{name} ({symbol})</h2>
          <p className="text-sm text-gray-600">Supply: {supply}</p>
          <p className="text-sm text-gray-600">Decimals: {decimals}</p>
        </div>
      </div>
    );
  };
  
  export default TokenCard;
  