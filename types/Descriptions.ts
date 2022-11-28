import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

export interface DescriptionsAttributes {
    id: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    experienceId?: string;
    applicationId?: string;
}

@Table({ tableName: "Descriptions", timestamps: false })
export class Descriptions extends Model<DescriptionsAttributes, DescriptionsAttributes> implements DescriptionsAttributes {
    @Column({ primaryKey: true, type: DataType.UUID })
    id!: string;
    @Column({ allowNull: true, type: DataType.STRING(512) })
    description?: string;
    @Column({ allowNull: true, type: DataType.DATE })
    createdAt?: Date;
    @Column({ allowNull: true, type: DataType.DATE })
    updatedAt?: Date;
    @Column({ allowNull: true, type: DataType.UUID })
    experienceId?: string;
    @Column({ allowNull: true, type: DataType.UUID })
    applicationId?: string;
}