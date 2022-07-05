import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  IJwtPayload,
  IPayloadBranchesUsers,
} from '../../interfaces/jwt-payload';
import { GlobalService } from '../../services/global.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  _user: IJwtPayload;
  @Input() set user(user: IJwtPayload) {
    this._user = user;
    this.formatInformation();
  }
  @Output() onRefresh = new EventEmitter<void>();
  activeBranch: IPayloadBranchesUsers;
  otherBranches: IPayloadBranchesUsers[];
  @ViewChild('close') close: ElementRef;

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private notificaionService: NotificationService
  ) {}

  ngOnInit(): void {
    this.formatInformation();
  }

  formatInformation() {
    this.activeBranch = this._user.branchToUser.find(
      (userBranch) => userBranch.active
    );
    this.otherBranches = this._user.branchToUser.filter(
      (userBranch) => userBranch.active == false
    );
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  switchBranch(id: number, branchName: string) {
    this.globalService.switchBranch(id).subscribe(
      async (data) => {
        localStorage.setItem('payload', JSON.stringify(data));
        this.onRefresh.emit();
        this.closeChatBox();
        this.notificaionService.customNotification(
          'success',
          `Ahora estas en ${branchName}`,
          'Sucursal cambiada'
        );
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  closeChatBox() {
    this.close.nativeElement.click();
  }
}
