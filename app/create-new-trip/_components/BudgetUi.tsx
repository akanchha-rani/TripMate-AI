import React from 'react'

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Budget",
    desc: "Spend smart, save more",
    icon: "💸",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Comfort",
    desc: "Balanced and flexible spending",
    icon: "💰",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Premium experiences, no limits",
    icon: "🛎️",
    color: "bg-purple-100 text-purple-600",
  },
];

function BudgetUi({onSelectedOption} : any) {
  return (
    <div className='grid grid-cols-3 md:grid-cols-3 gap-2 items-center mt-1'>
            {SelectBudgetOptions.map((item,index) => (
                <div key={index} className='p-3 border rounded-2xl bg-white hover:border-primary cursor-pointer flex flex-col items-center text-center' onClick={() => onSelectedOption(item.title+":"+item.desc)}>
                    <div className={`text-3xl p-3 rounded-full ${item.color}`}>{item.icon}</div>
                    <h2 className='text-lg font-semibold mt-2'>{item.title}</h2>
                    <p className='text-sm text-gray-500'>{item.desc}</p>
                </div>
            ))}
        </div>
  )
}

export default BudgetUi