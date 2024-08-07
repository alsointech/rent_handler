import { Body, Controller, Post } from "@nestjs/common";
import { FirebaseAdminService } from "./firebase-admin.service";

@Controller('firebase-admin')
// @UseGuards(FirebaseAuthGuard) 
export class FirebaseAdminController {
  constructor(private readonly firebaseAdminService: FirebaseAdminService) {}

//   @Post()
/* create(@Body() ) {
return this.firebaseAdminService.create(createCdDto);
} */


}
