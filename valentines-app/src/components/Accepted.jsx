import gif from '../assets/cosytales-love.gif'

export const Accepted = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-5">
        <h3 className='text-2xl text-center'>Yay, let's have our virtual date tomorrow evening. See you, my baby.</h3>
        <br/>
        <img 
            src={gif}
            width={300}
        />
        <h5 className='text-md'>I LOVE YOU SO MUCH MWAMWAMWA</h5>
    </div>
  )
}
