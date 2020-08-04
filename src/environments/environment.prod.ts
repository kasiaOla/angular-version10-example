import { LoggerDebugService } from '../app/shared-services/logger.service';
import { AnnouncementService } from 'src/app/shared-services/announcement.service';
export const environment = {
  production: true
};
export const envProdServiceLogger = LoggerDebugService;
export const envProdAnnouncementService = AnnouncementService;
