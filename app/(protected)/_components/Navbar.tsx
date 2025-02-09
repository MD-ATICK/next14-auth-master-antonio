"use client"
import UserButton from '@/components/auth/user-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
   const pathName = usePathname()

   return (
      <div className=' bg-secondary flex items-center justify-between font-medium text-black max-w-[700px] w-full p-3 px-2 sm:px-6 rounded-lg text-sm' >
         <div className='flex gap-x-2'>
            <Button asChild size={'sm'} variant={pathName === '/server' ? 'default' : 'outline'}>
               <Link href={'/server'} >Server</Link>
            </Button>
            <Button asChild size={'sm'} variant={pathName === '/client' ? 'default' : 'outline'}>
               <Link href={'/client'} >Client</Link>
            </Button>
            <Button asChild size={'sm'} variant={pathName === '/admin' ? 'default' : 'outline'}>
               <Link href={'/admin'} >Admin</Link>
            </Button>
            <Button asChild size={'sm'} variant={pathName === '/settings' ? 'default' : 'outline'}>
               <Link href={'/settings'} >Settings</Link>
            </Button>
         </div>
         <UserButton />
      </div>
   )
}
