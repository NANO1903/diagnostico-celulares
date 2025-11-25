import { Module } from '@nestjs/common';
import { DiagnosticoModule } from './diagnostico/diagnostico.module';

@Module({
  imports: [DiagnosticoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
