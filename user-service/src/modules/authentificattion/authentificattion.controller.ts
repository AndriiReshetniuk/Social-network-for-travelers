import { Controller } from '@nestjs/common';
import { AuthentificattionService } from './authentificattion.service';

@Controller('authentificattion')
export class AuthentificattionController {
  constructor(private readonly authentificattionService: AuthentificattionService) {}
}
