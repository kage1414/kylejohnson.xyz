import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

export interface ApplicationsAttributes {
    id: string;
    name?: string;
    active?: boolean;
    url?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({ tableName: "Applications", timestamps: false })
export class Applications extends Model<ApplicationsAttributes, ApplicationsAttributes> implements ApplicationsAttributes {
    @Column({ primaryKey: true, type: DataType.UUID })
    id!: string;
    @Column({ allowNull: true, type: DataType.STRING(128) })
    name?: string;
    @Column({ allowNull: true, type: DataType.BOOLEAN })
    active?: boolean;
    @Column({ allowNull: true, type: DataType.STRING(128) })
    url?: string;
    @Column({ allowNull: true, type: DataType.DATE })
    createdAt?: Date;
    @Column({ allowNull: true, type: DataType.DATE })
    updatedAt?: Date;
}