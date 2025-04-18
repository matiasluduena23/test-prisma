import prisma from "./prisma";

export async function getUsers() {
	try {
		const users = await prisma.user.findMany();

		return users;
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error getting the users", error.message);
		} else {
			console.log("Error en get users", error);
		}
	}
}
