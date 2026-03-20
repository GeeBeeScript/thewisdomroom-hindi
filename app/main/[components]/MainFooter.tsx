import Link from 'next/link'
import LogoutLink from './LogoutLink'

const MainFooter = () => {
  return (
    <footer className='bg-zinc-950 text-white px-5 py-3 w-full mt-10'>
      <div className='mx-auto flex flex-col justify-between items-center gap-5 py-3 max-w-200 mb-5'>
        <p className='text-2xl font-bold'>The Wisdom Room</p>

        <div className='w-full flex justify-around items-start gap-5 px-3'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-lg'>हमारे बारे में</p>
            <div className='flex flex-col justify-between items-center gap-1'>
              <Link href="/">हमारे बारे में</Link>
              <Link href="/">हमारे एपीआई</Link>
              <Link href="/">हमारा मिशन</Link>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-lg'>संपर्क करें</p>
            <div className='flex flex-col justify-between items-start gap-1'>
              <Link href="/">हमें ईमेल के जरिए संपर्क करें</Link>
              <Link href="/">सवाल पूछें</Link>
              <Link href="/">टिप्पणियां देखें</Link>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-lg'>Our App Sections</p>
            <div className='flex flex-col justify-between items-start gap-1'>
              <Link href="/">शिक्षाएं</Link>
              <Link href="/">लोकप्रिय सवाल देखें</Link>
              <LogoutLink />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter