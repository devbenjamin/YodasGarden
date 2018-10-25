import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PrivateProductComponent } from "./private-product/private-product.component";
import { AboutComponent } from "./about/about.component";
import { ProductComponent } from "./product/product.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "privateproduct",
    component: PrivateProductComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
