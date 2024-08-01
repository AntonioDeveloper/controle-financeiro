import { Register } from "@/core/model/register";
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
}