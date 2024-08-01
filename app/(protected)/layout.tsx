import React from 'react'
import Navbar from './_components/Navbar'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/lib/auth'

export default async function layout({ children }: { children: React.ReactNode }) {

    const session = await auth()
    console.log({ session })

    return (
        <SessionProvider session={session}>
            <div className=" min-h-screen py-8 flex gap-y-10 flex-col justify-center items-center w-full bg-gradient-to-r from-blue-800 via-sky-600 to-blue-800 ">
                <Navbar />
                {children}
            </div>
        </SessionProvider>
    )
}
