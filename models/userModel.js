const { PrismaClient } = require("@prisma/client");
const { randomUUID } = require("crypto");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function createUser(data) {
  const hashedPassword = await bcrypt.hash(data.senha, 10);

  await prisma.user.create({
    data: {
      id: randomUUID(),
      name: data.nome,
      email: data.email,
      phone: data.telefone,
      password: hashedPassword,
    },
  });
}
async function findUser(email) {
  const user = await prisma.user.findMany({ where: { email: email } });
  try {
    return user;
  } catch (error) {
    return false;
  }
}
async function findUserID(id) {
  const user = await prisma.user.findMany({ where: { id: id } });
  try {
    return user;
  } catch (error) {
    return false;
  }
}
module.exports = {
  createUser,
  findUser,
  findUserID,
};
