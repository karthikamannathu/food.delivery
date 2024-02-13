import React from 'react'


export default function ShimmerUI() {
    return (
        <div className="animate-pulse flex space-x-4">
        {Array(12).fill("").map((index) =>
         (<div key={index} className="grid gap-2"><div className='h-50 w-70 bg-slate-200 rounded'/> </div>))}
       </div>
      );
}
 