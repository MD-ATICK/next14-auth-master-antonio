"use client"
import { Button } from '@/components/ui/button'
import { deleteUser } from '@/lib/users'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'

export default function UserDelete({ id }: { id: string }) {

    const [isPending, setIsPending] = useState(false);
    const router = useRouter()

    const handleDelete = async () => {
        setIsPending(true)
        await deleteUser(id)
        router.refresh()
        setIsPending(false)
    }

    return (
        <div className=''>
            <Button size={"sm"} disabled={isPending} onClick={handleDelete}>
                {
                    isPending ?
                        <ClipLoader color='white' size={18} />
                        :
                        <Trash size={15} />
                }
            </Button>
            {/* <Button size={"sm"}> <ClipLoader color='white' size={18} /> </Button> */}
        </div>
    )
}
