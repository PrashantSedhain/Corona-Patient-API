import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { ReadComponent } from "./read/read.component";
import { UpdateComponent } from "./update/update.component";
import { DeleteComponent } from "./delete/delete.component";

const routes: Routes = [
  { path: "createPage", component: CreateComponent },
  {
    path: "readPage",
    component: ReadComponent,
  },
  { path: "updatePage", component: UpdateComponent },
  { path: "deletePage", component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
