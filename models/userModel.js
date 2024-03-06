const { PrismaClient } = require("@prisma/client");
const { randomUUID } = require("crypto");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function createUser(data) {
  try {
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
    return true;
  } catch (error) {
    return false;
  }
}
async function findUser(email) {
  try {
    const user = await prisma.user.findMany({ where: { email: email } });

    return user;
  } catch (error) {
    return false;
  }
}
async function findUserID(id) {
  try {
    const user = await prisma.user.findMany({ where: { id: id } });

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
