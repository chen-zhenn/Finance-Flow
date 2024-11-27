const path = require("path")
const fs = require("fs")
const dotenv = require("dotenv")
dotenv.config({ path: ".env" })
const mongoose = require("mongoose")
const Category = require("./models/categoryModels")
const Expense = require("./models/expenseModels")

const DB_CONN = process.env.DB_LOCAL_CONN

mongoose
  .connect(DB_CONN)
  .then((conn) => console.log("Conexão com banco realizado com sucesso!"))
  .catch((err) => {
    console.log("Erro ao conectar com Banco de Dados")
    process.exit(1)
  })

async function loadData() {
  const data = JSON.parse(
    fs.readFileSync(`${__dirname}/data/seed.json`, "utf8")
  )
  for (let collection in data) await populateDatabase(collection, data[collection])
  console.log("Seed gerado com sucesso!.")
  process.exit(0)
}

async function clearData() {
  const collectionList = [Category, Expense]
  for (let collection of collectionList) await collection.deleteMany()
  console.log("Todos documentos deletados com sucesso!.")
  process.exit(0)
}

async function deleteDocumentsFrom(collection) {
  try {
    await collection.deleteMany()
    console.log(`Documentos de ${collection} deletado com sucesso!`)
  } catch (error) {
    console.log(`Erro ao deletar documento de ${collection}!`)
  }
}

async function populateDatabase(collectionName, collectionData) {
  const collectionList = {
    category: Category,
    expense: Expense,
  }

  if (!collectionList[collectionName]) return

  try {
    if (collectionName === "category") {
      const data = await collectionList[collectionName].create(collectionData)
      console.log(`${collectionName} criada com sucesso!`)
    } else if (collectionName === "expense") {
      const queryResult = await Category.find().select("_id").exec()
      const categoryById = queryResult.map((cat) => ({ categoryId: cat._id }))
      const expenseData = collectionData.map((doc, index) => {
        const categoryId = categoryById[index % categoryById.length]
        return { ...doc, ...categoryId }
      })
      await collectionList[collectionName].create(expenseData)
      console.log(`${collectionName} criada com sucesso!`)
    }
  } catch (error) {
    console.error(`Erro ao gerar dados para ${collectionName}`)
    await deleteDocumentsFrom(collectionList[collectionName])
  }
}

if (process.argv[2] === "--seed") loadData()
if (process.argv[2] === "--clear") clearData()
