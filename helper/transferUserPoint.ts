import { User } from "@/components/common/navbar";

export function transferUserPointTop3( users : User[]) {
    const [user1, user2, user3] = sortUser(users)
    if(!user2) {
        return [user1]
    }
    if (!user3) {
        return [user1]
    }
    return [user2, user1, user3]
}

export function sortUser (users : User[]) {
    return users.sort(function(a, b) { return b.points - a.points })
}