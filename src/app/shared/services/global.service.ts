import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IJwtPayload } from '../interfaces/jwt-payload';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private httpClient: HttpClient
  ) {}
  loadScripts(renderer2: Renderer2, sccriptSrc: string, id: number) {
    // Recuperar un arreglo de todos los elementos <script>
    const existingScript: HTMLCollectionOf<HTMLScriptElement> =
      this.document.getElementsByTagName('script');

    for (let i = 0; i < existingScript.length; i++) {
      if (existingScript[i].id == `async-script-${id}`) {
        existingScript[i].parentElement?.removeChild(existingScript[i]);
      }
    }

    // Se crea el elemento <script>
    const scriptElement = renderer2.createElement('script');
    scriptElement.src = sccriptSrc;
    scriptElement.async = true;
    scriptElement.id = `async-script-${id}`;
    renderer2.appendChild(this.document.body, scriptElement);
    return scriptElement;
  }

  switchBranch(id: number) {
    return this.httpClient.get<IJwtPayload>(
      `${environment.API_URL}branches-users/switch-branch/${id}`
    );
  }
}
