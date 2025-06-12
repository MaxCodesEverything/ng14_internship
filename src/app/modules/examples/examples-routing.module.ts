import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExamplesComponent } from "src/app/components/examples/examples.component";

const routes: Routes = [
    {
        path: '',
        component: ExamplesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExamplesRoutingModule{}