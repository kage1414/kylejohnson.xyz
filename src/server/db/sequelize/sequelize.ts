import { clear } from 'console';
import {
  DataTypes,
  Sequelize,
  CreationOptional,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

const sequelize = new Sequelize('postgresql://localhost:5432/kylejohnson_xyz', {
  logging: false,
  dialect: 'postgres',
});

interface ExperienceModel
  extends Model<
    InferAttributes<ExperienceModel>,
    InferCreationAttributes<ExperienceModel>
  > {
  id: CreationOptional<string>;
  employer: string;
  active: CreationOptional<boolean>;
  position: string;
  time: string;
}

const Experience = sequelize.define<ExperienceModel>(
  'Experience',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    employer: {
      type: new DataTypes.STRING(),
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    position: {
      type: new DataTypes.STRING(),
    },
    time: {
      type: new DataTypes.STRING(),
    },
  },
  {
    underscored: true,
  }
);

interface ApplicationModel
  extends Model<
    InferAttributes<ApplicationModel>,
    InferCreationAttributes<ApplicationModel>
  > {
  id: CreationOptional<string>;
  name: string;
  active: CreationOptional<boolean>;
  url: CreationOptional<string>;
}

const Application = sequelize.define<ApplicationModel>(
  'Application',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: new DataTypes.STRING(),
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    url: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

interface EducationModel
  extends Model<
    InferAttributes<EducationModel>,
    InferCreationAttributes<EducationModel>
  > {
  id: CreationOptional<string>;
  school: string;
  time: string;
  certificate: CreationOptional<string>;
  degree: CreationOptional<string>;
  active: CreationOptional<boolean>;
}

const Education = sequelize.define<EducationModel>(
  'Education',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    school: {
      type: new DataTypes.STRING(),
    },
    time: {
      type: new DataTypes.STRING(),
    },
    certificate: {
      type: new DataTypes.STRING(),
      allowNull: true,
    },
    degree: {
      type: new DataTypes.STRING(),
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    underscored: true,
  }
);

interface TechStackModel
  extends Model<
    InferAttributes<TechStackModel>,
    InferCreationAttributes<TechStackModel>
  > {
  id: CreationOptional<string>;
  stack: string;
}

const TechStack = sequelize.define<TechStackModel>(
  'TechStack',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    stack: {
      type: new DataTypes.STRING(),
    },
  },
  {
    underscored: true,
  }
);

interface DescriptionModel
  extends Model<
    InferAttributes<DescriptionModel>,
    InferCreationAttributes<DescriptionModel>
  > {
  id: CreationOptional<string>;
  description: string;
}

const Description = sequelize.define(
  'Description',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    description: {
      type: new DataTypes.STRING(),
    },
  },
  {
    underscored: true,
  }
);

interface TechnologyModel
  extends Model<
    InferAttributes<TechnologyModel>,
    InferCreationAttributes<TechnologyModel>
  > {
  id: CreationOptional<string>;
  name: string;
  url: CreationOptional<string>;
}

const Technology = sequelize.define<TechnologyModel>(
  'Technology',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: new DataTypes.STRING(),
      unique: true,
    },
    url: {
      type: new DataTypes.STRING(),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    underscored: true,
  }
);

export interface TechnologyApplicationModel
  extends Model<
    InferAttributes<TechnologyApplicationModel>,
    InferCreationAttributes<TechnologyApplicationModel>
  > {
  technologyId: string;
  applicationId: string;
}

const TechnologyApplication = sequelize.define<TechnologyApplicationModel>(
  'TechnologyApplication',
  {
    technologyId: {
      type: DataTypes.UUID,
      references: {
        model: Application,
        key: 'id',
      },
    },
    applicationId: {
      type: DataTypes.UUID,
      references: {
        model: Technology,
        key: 'id',
      },
    },
  },
  {
    underscored: true,
  }
);

TechStack.hasOne(Technology, {
  foreignKey: 'techStackId',
});
Technology.belongsTo(TechStack);

Experience.hasMany(Description, { foreignKey: 'experienceId' });
Description.belongsTo(Experience);

Technology.belongsToMany(Application, { through: TechnologyApplication });
Application.belongsToMany(Technology, { through: TechnologyApplication });

Application.hasMany(Description, {
  foreignKey: 'applicationId',
});
Description.belongsTo(Application);

export {
  sequelize,
  Description,
  Experience,
  Application,
  Technology,
  TechStack,
  Education,
  TechnologyApplication,
};
