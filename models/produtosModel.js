const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createProduct(dataBody, nameFile) {
  try {
    await prisma.produtos.create({
      data: {
        image: nameFile,
        nome: dataBody.produto,
        preco: parseFloat(dataBody.preco),
        taxa: dataBody.taxaCartao,
        tipo: dataBody.tipoProduto,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
async function getProducts() {
  try {
    const products = await prisma.produtos.findMany();
    return products;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
async function updateProducts(id, data) {
  try {
    await prisma.produtos.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nome: data.produto,
        preco: parseFloat(data.preco),
        taxa: data.taxaCartao,
        tipo: data.tipoProduto,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

async function deleteProduct(id) {
  try {
    const productDeleted = await prisma.produtos.delete({
      where: {
        id: parseInt(id),
      },
    });
    return productDeleted;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  createProduct,
  getProducts,
  updateProducts,
  deleteProduct,
};
