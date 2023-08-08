import { Component, Input } from '@angular/core';
import tree, { TreeData } from './tree.model';

@Component({
  selector: 'myworkspace-tree',
  template: `
    <ul>
      <ng-container *ngTemplateOutlet="treeNode; context: { nodes: treeData?.children }"></ng-container>
    </ul>

    <ng-template #treeNode let-nodes="nodes">
        <li *ngFor="let node of nodes;let i = index" nodeToggle="node.expanded">
          {{node.nodeName}}
          <ul *ngIf="node.children">
            <ng-container *ngTemplateOutlet="treeNode; context : {nodes: node.children }" ></ng-container>
          </ul> 
    </ng-template>
  `,  
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {

  //* This need to take in a root node. then it needs to add child nodes whenver a leaf has child nodes */
  @Input() treeData?: TreeData | undefined | null;

  constructor() {
    // this.treeData = tree;
    // console.log(this.treeData);
  }

  trackByfunction(index: number, node: any) {
    return index;
  }

}
