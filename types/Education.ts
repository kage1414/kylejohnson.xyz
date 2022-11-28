import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

export interface EducationAttributes {
    id: string;
    school?: string;
    time?: string;
    certificate?: string;
    degree?: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({ tableName: "Education", timestamps: false })
export class Education extends Model<EducationAttributes, EducationAttributes> implements EducationAttributes {
    @Column({ primaryKey: true, type: DataType.UUID })
    id!: string;
    @Column({ allowNull: true, type: DataType.STRING(128) })
    school?: string;
    @Column({ allowNull: true, type: DataType.STRING(128) })
    time?: string;
    @Column({ allowNull: true, type: DataType.STRING(128) })
    certificate?: string;
    @Column({ allowNull: true, type: DataType.STRING(128) })
    degree?: string;
    @Column({ allowNull: true, type: DataType.BOOLEAN })
    active?: boolean;
    @Column({ allowNull: true, type: DataType.DATE })
    createdAt?: Date;
    @Column({ allowNull: true, type: DataType.DATE })
    updatedAt?: Date;
}