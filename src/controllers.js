const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { entrySchema, updateEntrySchema, paginationSchema, searchSchema } = require('./validators');

async function addEntry(req, res) {
  const validation = entrySchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.errors });
  }
  try {
    const entry = await prisma.entry.create({ data: req.body });
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add entry' });
  }
}

async function listEntries(req, res) {
  const { page, limit } = paginationSchema.parse(req.query);
  const skip = (page - 1) * limit;
  try {
    const entries = await prisma.entry.findMany({ skip, take: limit });
    const total = await prisma.entry.count();
    res.json({ entries, total, page, limit });
  } catch (error) {
    res.status(500).json({ error: 'Failed to list entries' });
  }
}

async function editEntry(req, res) {
  const id = parseInt(req.params.id);
  const validation = updateEntrySchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.errors });
  }
  try {
    const entry = await prisma.entry.update({
      where: { id },
      data: req.body,
    });
    res.json(entry);
  } catch (error) {
    res.status(404).json({ error: 'Entry not found' });
  }
}

async function deleteEntry(req, res) {
  const id = parseInt(req.params.id);
  try {
    await prisma.entry.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Entry not found' });
  }
}

//Search by title
async function searchEntries(req, res) {
  const { title } = searchSchema.parse(req.query);

  const where = title ? { title: { contains: title } } : {};

  try {
    const entries = await prisma.entry.findMany({ where });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = { addEntry, listEntries, editEntry, deleteEntry, searchEntries };