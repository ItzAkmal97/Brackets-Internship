import img from './assets/illustration-article.svg'
import avatarImg from './assets/image-avatar.webp'

function App() {
  return (
    <>
      <main className="bg-primaryYellow h-screen w-screen flex justify-center items-center font-customFont">
        <div className=" bg-white rounded-xl max-w-96 p-4 border-solid border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <img 
            src={img} 
            alt="img" 
            className='rounded-xl mx-auto max-h-64 mt-2'/>
          <div className='flex flex-col gap-2 mx-2'>
            <span className='font-bold mt-4 bg-primaryYellow px-2 py-1 rounded w-fit text-center text-darkGray'>Learning Tailwind</span>
            <span className='text-sm text-darkGray'>Designed 30 Oct 2024</span>
            <h1 className='text-2xl font-bold hover:text-primaryYellow cursor-pointer w-fit'>HTML & CSS Foundations</h1>
            <p className='text-lightGray'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div className='flex items-center gap-4 mt-2'>
              <img src={avatarImg} alt="avatar" className='rounded-full w-8 h-8'/>
              <span className='text-xs font-bold text-darkGray font-sansFont'>Muhammad Akmal</span>
            </div>
          </div>
        </div>  
      </main>
    </>
  )
}

export default App