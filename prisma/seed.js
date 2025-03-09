const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

// Hash a password
async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

async function main() {
  console.log("🌱 Starting seeding...");

  // Create the admin user
  const adminPassword = await hashPassword("clave123");
  const admin = await prisma.user.upsert({
    where: { email: "admin@test.com" },
    update: {},
    create: {
      email: "admin@test.com",
      name: "Administrator",
      password: adminPassword,
      image: faker.image.avatar(),
    },
  });

  console.log(`👤 Created admin user: ${admin.name} (${admin.email})`);

  // Create a regular user
  const userPassword = await hashPassword("clave123");
  const user = await prisma.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      email: "user@test.com",
      name: "Test User",
      password: userPassword,
      image: faker.image.avatar(),
    },
  });

  console.log(`👤 Created regular user: ${user.name} (${user.email})`);

  // Create additional fake users if needed (commented out for now)
  /*
  const additionalUsers = 5;
  for (let i = 0; i < additionalUsers; i++) {
    const fakeUser = await prisma.user.create({
      data: {
        email: faker.internet.email().toLowerCase(),
        name: faker.person.fullName(),
        password: await hashPassword('password123'),
        image: faker.image.avatar(),
      },
    });
    console.log(`👤 Created fake user: ${fakeUser.name} (${fakeUser.email})`);
  }
  */

  console.log("✅ Seeding completed!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
