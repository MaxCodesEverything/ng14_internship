import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TsComponent } from "src/app/components/ts/ts.component";

const routes: Routes = [
    {
        path: '',
        component: TsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TsRoutingModule{}