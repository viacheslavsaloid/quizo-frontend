import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { NgOnDestory$ } from 'app/utils/hooks';

@Component({
  selector: 'app-fuse-chat-panel',
  templateUrl: './fuse-chat-panel.component.html',
  styleUrls: ['./fuse-chat-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FuseChatPanelComponent implements OnInit, AfterViewInit {
  public contacts: any[];
  public chat: any;
  public selectedContact: any;
  public sidebarFolded: boolean;
  public user: any;

  @ViewChild('replyForm')
  private _replyForm: NgForm;

  @ViewChild('replyInput')
  private _replyInput: ElementRef;

  @ViewChildren(FusePerfectScrollbarDirective)
  private _fusePerfectScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

  private _chatViewScrollbar: FusePerfectScrollbarDirective;

  constructor(
    private _ngOnDestroy$: NgOnDestory$,
    private _httpClient: HttpClient,
    private _fuseSidebarService: FuseSidebarService
  ) {
    // Set the defaults
    this.selectedContact = null;
    this.sidebarFolded = true;
  }

  ngOnInit(): void {
    this._fuseSidebarService
      .getSidebar('chatPanel')
      .foldedChanged.pipe(takeUntil(this._ngOnDestroy$))
      .subscribe((folded) => {
        this.sidebarFolded = folded;
      });
  }

  ngAfterViewInit(): void {
    this._chatViewScrollbar = this._fusePerfectScrollbarDirectives.find((directive) => {
      return directive.elementRef.nativeElement.id === 'messages';
    });
  }

  private _prepareChatForReplies(): void {
    setTimeout(() => {
      if (this._chatViewScrollbar) {
        this._chatViewScrollbar.update();

        setTimeout(() => {
          this._chatViewScrollbar.scrollToBottom(0);
        });
      }
    });
  }

  public foldSidebarTemporarily(): void {
    this._fuseSidebarService.getSidebar('chatPanel').foldTemporarily();
  }

  public unfoldSidebarTemporarily(): void {
    this._fuseSidebarService.getSidebar('chatPanel').unfoldTemporarily();
  }

  public toggleSidebarOpen(): void {
    this._fuseSidebarService.getSidebar('chatPanel').toggleOpen();
  }

  public shouldShowContactAvatar(message, i): boolean {
    return (
      message.who === this.selectedContact.id &&
      ((this.chat.dialog[i + 1] && this.chat.dialog[i + 1].who !== this.selectedContact.id) || !this.chat.dialog[i + 1])
    );
  }

  public isFirstMessageOfGroup(message, i): boolean {
    return i === 0 || (this.chat.dialog[i - 1] && this.chat.dialog[i - 1].who !== message.who);
  }

  public isLastMessageOfGroup(message, i): boolean {
    return (
      i === this.chat.dialog.length - 1 || (this.chat.dialog[i + 1] && this.chat.dialog[i + 1].who !== message.who)
    );
  }

  public toggleChat(contact): void {
    if (this.selectedContact && contact.id === this.selectedContact.id) {
      this.resetChat();
    } else {
      this.unfoldSidebarTemporarily();

      this.selectedContact = contact;
    }
  }

  public resetChat(): void {
    this.selectedContact = null;

    this.chat = null;
  }

  public reply(event): void {
    event.preventDefault();

    if (!this._replyForm.form.value.message) {
      return;
    }

    const message = {
      who: this.user.id,
      message: this._replyForm.form.value.message,
      time: new Date().toISOString(),
    };

    this.chat.dialog.push(message);

    this._replyForm.reset();
  }
}
