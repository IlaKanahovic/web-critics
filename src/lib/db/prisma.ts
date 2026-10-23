import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../../../prisma/generated/prisma/client';

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClient
    pgPool?: Pool
}

if (!process.env.DATABASE_URL) {
    throw new Error(
        "DATABASE_URL is not set. Проверьте файл .env или настройки окружения. " +
        "Сбой инициализации PrismaClient + pg.Pool."
    )
}

const pool = globalForPrisma.pgPool ?? new Pool({
    connectionString: process.env.DATABASE_URL
})

const adapter = new PrismaPg(pool)

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    adapter
})

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.pgPool = pool
    globalForPrisma.prisma = prisma
}
