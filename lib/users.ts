"use server"

import { db } from "./db"
import { currentUser } from "./reuse/currentUser"


export const usersGet = async () => {

    const user = await currentUser()

    if (!user) {
        return { users: [] }
    }

    const users = await db.user.findMany({ where: { id: { not: user.id } } })

    return { users: users }
}

export const deleteUser = async (id: string) => {
    await db.user.delete({ where: { id } })
    return { success: 'deleted user' }
}