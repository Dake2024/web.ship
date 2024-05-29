import React from 'react';

const AddParcel = () => {
    return (
        <button class="bg-red-600 px-6 pt-2 pb-2.5 rounded-md max-w-md ">
        <div class="flex font-bold text-white">
        <svg  class=" mr-4"width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#14145A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12 8V16" stroke="#14145A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M8 12H16" stroke="#14145A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
            Добавить
        </div> 
        </button>
    )
}

export default AddParcel;