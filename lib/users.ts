"use server"

import { db } from "./db"


export const usersGet = async () => {
    const users = await db.user.findMany({})

    return { users: users }
}

export const deleteUser = async (id: string) => {
    await db.user.delete({ where: { id } })
    return { success: 'deleted user' }
}