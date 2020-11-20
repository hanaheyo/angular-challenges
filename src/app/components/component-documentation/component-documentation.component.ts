import { Component, OnInit } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent implements OnInit {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: ' Example 2',
      content: 'Exampled Content2',
      isExpanded: false,
    }
  ];
  public progressValue = 25;

  constructor() { }

  ngOnInit(): void {
  }

}
