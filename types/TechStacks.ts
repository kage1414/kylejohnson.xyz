import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

export interface TechStacksAttributes {
    id: string;
    stack?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({ tableName: "TechStacks", timestamps: false })
export class TechStacks extends Model<TechStacksAttributes, TechStacksAttributes> implements TechStacksAttributes {
    @Column({ primaryKey: true, type: DataType.UUID })
    id!: string;
    @Column({ allowNull: true, type: DataType.STRING(128) })
    stack?: string;
    @Column({ allowNull: true, type: DataType.DATE })
    createdAt?: Date;
    @Column({ allowNull: true, type: DataType.DATE })
    updatedAt?: Date;
}