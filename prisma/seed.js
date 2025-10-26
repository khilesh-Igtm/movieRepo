const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.entry.createMany({
    data: [
      {
        title: 'Inception',
        type: 'Movie',
        director: 'Christopher Nolan',
        budget: '$160M',
        location: 'Los Angeles',
        duration: '148 min',
        yearTime: '2010',
      },
      {
        title: 'The Matrix',
        type: 'Movie',
        director: 'Wachowski Sisters',
        budget: '$63M',
        location: 'Sydney',
        duration: '136 min',
        yearTime: '1999',
      },
      {
        title: 'Breaking Bad',
        type: 'TV Show',
        director: 'Vince Gilligan',
        budget: '$3M per episode',
        location: 'Albuquerque',
        duration: '47 min/episode',
        yearTime: '2008-2013',
      },
      {
        title: 'Game of Thrones',
        type: 'TV Show',
        director: 'David Benioff & D.B. Weiss',
        budget: '$15M per episode',
        location: 'Northern Ireland',
        duration: '57 min/episode',
        yearTime: '2011-2019',
      },
    ],
  });
  console.log('Database seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });