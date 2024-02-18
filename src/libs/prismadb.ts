import {PrismaClient} from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;

// we are stopping nextjs to create multiple isntance of Prisma clients
// as there is limit we get warn(prisma-client) Already 10 Prisma Clients are actively running