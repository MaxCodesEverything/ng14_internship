import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EtudeComponent } from "src/app/components/etude/etude.component";

const routes: Routes = [
    {
        path: '',
        component: EtudeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EtudeRoutingModule{}