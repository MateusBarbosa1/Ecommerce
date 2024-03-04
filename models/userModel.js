const { PrismaClient } = require("@prisma/client");
const { randomUUID } = require("crypto");

const prisma = new PrismaClient();

async function createUser(data) {
  await prisma.user.create({
    data: {
      id: randomUUID(),
      name: data.nome,
      email: data.email,
      phone: data.telefone,
      password: data.senha,
    },
  });
}
module.exports = {
  createUser,
};
