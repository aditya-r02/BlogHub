import './Loading.css'

export default function Loading(){

    return (
        <div className='flex flex-col gap-2 h-96 justify-center items-center'>
            <div className="spinner"></div>
            <span className='font-medium text-base dark:text-white'>Loading</span>
        </div>
    );
}