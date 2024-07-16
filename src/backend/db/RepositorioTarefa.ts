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

  async getAllRegisters() {
    return await this.db.register.findMany();
  }
}