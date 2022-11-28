import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

export interface TechnologiesAttributes {
    id: string;
    name?: string;
    url?: string;
    createdAt?: Date;
    updatedAt?: Date;
    applicationId?: string;
    techStackId?: string;
}

@Table({ tableName: "Technologies", timestamps: false })
export class Technologies extends Model<TechnologiesAttributes, TechnologiesAttributes> implements TechnologiesAttributes {
    @Column({ primaryKey: true, type: DataType.UUID })
    id!: string;
    @Column({ allowNull: true, type: DataType.STRING(255) })
    name?: string;
    @Column({ allowNull: true, type: DataType.STRING(255) })
    url?: string;
    @Column({ allowNull: true, type: DataType.DATE })
    createdAt?: Date;
    @Column({ allowNull: true, type: DataType.DATE })
    updatedAt?: Date;
    @Column({ allowNull: true, type: DataType.UUID })
    applicationId?: string;
    @Column({ allowNull: true, type: DataType.UUID })
    techStackId?: string;
}