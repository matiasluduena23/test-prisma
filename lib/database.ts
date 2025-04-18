import prisma from "./prisma";

export async function getUsers() {
	try {
		const users = await prisma.user.findMany();
		console.log(users);
		return users;
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error getting the users", error.message);
			throw new Error("Error en la base de datos");
		} else {
			console.log("Error en get users", error);
			throw new Error("Error en la base de datos");
		}
	}
}
