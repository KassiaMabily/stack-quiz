import { prisma } from "../prisma";

export async function fetchLanguages() {
    return prisma.language.findMany();
}
