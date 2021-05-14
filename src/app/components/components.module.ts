import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [IonicModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class ComponentsModule {}
