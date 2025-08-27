
export default function TrustedBy () {
  const items = ['spotify', 'coinbase', 'slack', "Dropbox", "zoom"];
  return (
    <div className="max-h-40 h-full w-full flex flex-col items-center justify-center lg:mb-0 mb-15 overflow-hidden">
        <div className="text-slate-600 font-Nav font-medium ">Trusted by our Best clients</div>
        <div className="flex animate-infinite-scroll gap-2 perspective-[1000px] transform-3d">
            {Array.from({ length: 6 * items.length }, (_, i) => {
                const name = items[i %items.length]
                return (
                    <div key={i} className="h-14 w-30 rounded-xl shadow-md m-7 flex justify-center items-center ">
                        <div className="text-violet-400 font-semibold text-xl">{name}</div>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

