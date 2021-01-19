import { Sequelize, SyncOptions } from 'sequelize';

import { setAssociations } from './associations';
import { setDefaultValues } from './defaultValues';

import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
} from '../app.constants';

class DB {
  public sequelize!: Sequelize;
  public readonly options: SyncOptions = {
    force: true,
  };

  constructor() {
    this.setSequelize();
  }

  public async init() {
    this.setAssociations();
    await this.sequelize.sync(this.options);
    await this.createDefaultValues();
  }

  public async createDefaultValues() {
    await setDefaultValues();
  }

  private setAssociations() {
    setAssociations();
  }

  private setSequelize() {
    try {
      this.sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        dialect: DB_DIALECT,
        pool: {
          max: 20,
          min: 1,
          acquire: 30000,
          idle: 10000,
        },
      });
    } catch (e) {
      console.error(e);
    }
  }
}

const db = new DB();
export { db };
