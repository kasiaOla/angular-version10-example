import { LoggerDebugService } from '../app/shared/shared-services/logger.service';
import { AnnouncementService } from 'src/app/shared/shared-services/announcement.service';
export const environment = {
  production: true
};
export const envProdServiceLogger = LoggerDebugService;
export const envProdAnnouncementService = AnnouncementService;
