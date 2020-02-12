import { Component, OnInit } from '@angular/core'
import { IdeaService, Idea } from 'src/app/services/idea.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public ideas: Observable<Idea[]>

  constructor (private ideaService: IdeaService) {}

  ngOnInit () {
    this.ideas = this.ideaService.getIdeas()
  }
}
