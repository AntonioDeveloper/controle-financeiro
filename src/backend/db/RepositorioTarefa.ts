import { Register } from "@/core/model/register";
import { User } from "@/core/model/user";
import { PrismaClient } from "@prisma/client";

export default class RepositorioTarefa {
  private db: PrismaClient

  constructor() {
    this.db = new PrismaClient();
  }

  async insert(register: Register) {
    return await this.db.register.create({ data: register });
  }

  async update(register: Register) {
    return await this.db.register.update({
      where: { id: register.id }, data: register
    });
  }

  async delete(id: string) {
    return await this.db.register.delete({
      where: { id }
    });
  }

  async getAllRegisters() {
    return await this.db.register.findMany();
  }

  async getSingleRegister(id: string) {
    return await this.db.register.findUnique({ where: { id } })
  }

  async filterRegisterByStatus(status: string) {
    return await this.db.register.findMany({
      where: {
        status: {
          equals: status,
        }
      },
    })
  }

  async filterRegisterByMonth(month: string) {
    return await this.db.register.findMany({
      where: {
        date: {
          contains: month,
        }
      },
    })
  }

  // ** USER FUNCTIONS ** 

  async insertNewUser(user: any) {
    return await this.db.user.create({ data: user })
  };

  async getSingleUser(email: string, password: string) {
    return await this.db.user.findUnique({ where: { email, password } })
  }
}