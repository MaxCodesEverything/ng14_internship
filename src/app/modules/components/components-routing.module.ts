import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsComponent } from "./components/components-component/components.component";

const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ComponentsRoutingModule{}