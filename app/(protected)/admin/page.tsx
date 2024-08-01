import FormSuccess from '@/components/formSuccess'
import RoleGate from '@/components/role-gate'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { usersGet } from '@/lib/users'
import { Trash } from 'lucide-react'
import { SyncLoader } from 'react-spinners'
import UserDelete from '../_components/UserDelete'


type Role = 'ADMIN' | 'USER' | 'GUEST';

// Define the userProps interface
interface userProps {
    id: string;
    name: string;
    email: string | null;
    password: string | null;
    emailVerified: Date | null;
    role: Role; // Change the role type to Role
    image: string | null;
    isTwoFactorEnabled: boolean;
}

export default async function Admin() {

    const users: userProps[] = await (await usersGet()).users

    return (

        <Card className=' font-medium max-w-[700px] w-full text-center bg-white p-0 rounded-lg'>
            <CardHeader className=' text-2xl font-bold'>
                <p>🤖 Admin</p>
            </CardHeader>
            <CardContent className=' p-2 sm:p-6 space-y-4 space-x-0'>
                <RoleGate allowedRole='ADMIN' >
                    <div className='flex flex-row  w-full gap-2 items-center justify-between rounded-lg border p-2 text-sm font-semibold shadow-sm'>
                        <p className={` bg-gray-200 px-1 w-[8%] text-[12px] rounded-md p-1`}>NO</p>
                        <p className={` bg-gray-200 hidden sm:block px-2 w-[20%] text-[12px] rounded-md p-1`}>NAME</p>
                        <p className={` bg-gray-200 px-2 w-[50%] sm:w-[40%] text-[12px] rounded-md p-1`}>EMAIL</p>
                        <p className={` bg-gray-200 px-2 w-[20%] text-[12px] rounded-md p-1`}>ROLE</p>
                        <p className={` bg-gray-200 px-2 w-[20%] sm:w-[12%] text-[11px] rounded-md p-1`}>DELETE</p>
                    </div>
                    {
                        users ? users.map((user: userProps, index) => {
                            return <section key={user?.id} className='flex gap-x-2 w-full flex-row items-center justify-between rounded-lg border p-2 text-sm font-semibold shadow-sm'>
                                <p className={` bg-gray-200 px-2 w-[8%] text-[12px] rounded-md p-1`}>{index + 1}</p>
                                <p className={` bg-gray-200 px-2 hidden  sm:block w-[20%] text-[12px] rounded-md p-1`}>{user?.name}</p>
                                <p className={` bg-gray-200 px-2 w-[60%] text-[11px] sm:w-[40%] sm:text-[12px] rounded-md p-1`}>{user?.email}</p>
                                <p className={` bg-gray-200 px-2 w-[20%] text-[11px] rounded-md p-1`}>{user?.role}</p>
                                <div className=' w-[12%]'>
                                    <UserDelete id={user?.id} />
                                </div>
                            </section>

                        }) :
                            // skeleton for users
                            <div className=' w-full flex flex-col gap-y-5'>
                                <div className=' w-full flex items-center gap-2 p-3 shadow-md rounded-lg border'>
                                    <div className=' skeleton rounded-sm w-[10%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[50%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[25%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[15%] h-4'></div>
                                </div>
                                <div className=' w-full flex items-center gap-2 p-3 shadow-md rounded-lg border'>
                                    <div className=' skeleton rounded-sm w-[10%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[50%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[25%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[15%] h-4'></div>
                                </div>
                                <div className=' w-full flex items-center gap-2 p-3 shadow-md rounded-lg border'>
                                    <div className=' skeleton rounded-sm w-[10%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[50%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[25%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[15%] h-4'></div>
                                </div>
                                <div className=' w-full flex items-center gap-2 p-3 shadow-md rounded-lg border'>
                                    <div className=' skeleton rounded-sm w-[10%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[50%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[25%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[15%] h-4'></div>
                                </div>
                                <div className=' w-full flex items-center gap-2 p-3 shadow-md rounded-lg border'>
                                    <div className=' skeleton rounded-sm w-[10%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[50%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[25%] h-4'></div>
                                    <div className=' skeleton rounded-sm w-[15%] h-4'></div>
                                </div>
                            </div>
                    }
                    <FormSuccess message='you allowed to show this content.' />
                </RoleGate>
            </CardContent>
        </Card>
    )
}
