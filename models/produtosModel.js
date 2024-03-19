const { PrismaClient } = require("@prisma/client");
const { randomUUID } = require("crypto");

const prisma = new PrismaClient();

async function createProduct(dataBody, nameFile) {
  await prisma.produtos.create({
    data: {
      image: nameFile,
      nome: dataBody.produto,
      preco: parseFloat(dataBody.preco),
      taxa: dataBody.taxaCartao,
      tipo: dataBody.tipoProduto,
    },
  });
}

module.exports = {
  createProduct,
};
