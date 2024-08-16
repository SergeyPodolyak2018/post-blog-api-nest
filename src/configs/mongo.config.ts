import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService): string => {
  return `mongodb+srv://${configService.get('DB_USER')}:${configService.get('DB_PASSWORD')}@cluster0.cgsib.mongodb.net/${configService.get('DB_NAME')}?retryWrites=true&w=majority&appName=${configService.get('DB_CLASTER')}`;
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
