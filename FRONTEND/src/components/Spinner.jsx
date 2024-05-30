import React from "react";

export default function Spinner() {
  return (
    <div className=' flex flex-col justify-center items-center w-[99%] mr-10 h-[95%] shadow-2xl rounded-2xl  board'>
      <div className='animate__animated animate__fadeIn my-[3%] shadow-2xl w-screen bg-white flex px-2 py-2 rounded-full border  overflow-hidden max-w-md mx-auto font-sans'>
        <div className='flex w-full'>
          <input
            type='text'
            placeholder='Search The Employee...'
            className='w-full outline-none bg-white pl-4 text-sm'
            aria-label='Search Input'
          />
          <button className='bg-orange-500 hover:bg-orange-500 transition-all text-white text-sm rounded-full px-5 py-2.5 ml-2'>
            Search
          </button>
        </div>
      </div>
      <div className='animate__animated animate__fadeIn mb-[1%]-th mt-10 scrollbar h-[70%] w-[90%] rounded-xl overflow-x-auto'>
        <table className='scrollbar-hidden scrollbar-th w-full shadow-2xl rounded-xl bg-white font-sans'>
          <tbody className=' whitespace-nowrap  scrollbar-hidden scrollbar-th '>
            <tr>
              <td colSpan='6' className='px-6 py-4'>
                <div className='animate-pulse flex justify-center items-center w-[95%] space-x-4'>
                  <div className='ml-10 rounded-full bg-gray-200 h-14 w-14'></div>
                  <div className='flex-1 space-y-4 py-1'>
                    <div className=' ml-20 space-y-2'>
                      <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                      <div className='h-4 bg-gray-200 rounded w-1/4'></div>
                    </div>
                  </div>
                  <div className='flex space-x-40'>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan='6' className='px-6 py-4'>
                <div className='animate-pulse flex justify-center items-center w-[95%] space-x-4'>
                  <div className='ml-10 rounded-full bg-gray-200 h-14 w-14'></div>
                  <div className='flex-1 space-y-4 py-1'>
                    <div className=' ml-20 space-y-2'>
                      <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                      <div className='h-4 bg-gray-200 rounded w-1/4'></div>
                    </div>
                  </div>
                  <div className='flex space-x-40'>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan='6' className='px-6 py-4'>
                <div className='animate-pulse flex justify-center items-center w-[95%] space-x-4'>
                  <div className='ml-10 rounded-full bg-gray-200 h-14 w-14'></div>
                  <div className='flex-1 space-y-4 py-1'>
                    <div className=' ml-20 space-y-2'>
                      <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                      <div className='h-4 bg-gray-200 rounded w-1/4'></div>
                    </div>
                  </div>
                  <div className='flex space-x-40'>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan='6' className='px-6 py-4'>
                <div className='animate-pulse flex justify-center items-center w-[95%] space-x-4'>
                  <div className='ml-10 rounded-full bg-gray-200 h-14 w-14'></div>
                  <div className='flex-1 space-y-4 py-1'>
                    <div className=' ml-20 space-y-2'>
                      <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                      <div className='h-4 bg-gray-200 rounded w-1/4'></div>
                    </div>
                  </div>
                  <div className='flex space-x-40'>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                    <div className='h-8 bg-gray-200 rounded w-20 '></div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
