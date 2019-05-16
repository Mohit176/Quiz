import { Component } from '@angular/core'
import   {Router} from '@angular/router'

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

    question = {}
    
    constructor(private router: Router) {}

    startQuiz(){
    this.router.navigate(['quiz']);
    }
}