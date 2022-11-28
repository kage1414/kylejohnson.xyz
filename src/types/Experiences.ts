import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

export interface ExperiencesAttributes {
    id: string;
    employer?: string;
    active?: boolean;
    position?: string;
    time?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({ tableName: "Experiences", timestamps: false })
export class Experiences extends Model<ExperiencesAttributes, ExperiencesAttributes> implements ExperiencesAttributes {
    @Column({ primaryKey: true, type: DataType.UUID })
    id!: string;
    @Column({ allowNull: true, type: DataType.STRING(128) })
    employer?: string;
    @Column({ allowNull: true, type: DataType.BOOLEAN })
    active?: boolean;
    @Column({ allowNull: true, type: DataType.STRING(128) })
    position?: string;
    @Column({ allowNull: true, type: DataType.STRING(128) })
    time?: string;
    @Column({ allowNull: true, type: DataType.DATE })
    createdAt?: Date;
    @Column({ allowNull: true, type: DataType.DATE })
    updatedAt?: Date;
}