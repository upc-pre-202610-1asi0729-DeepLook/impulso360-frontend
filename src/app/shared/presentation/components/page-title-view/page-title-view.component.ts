/**
 * @summary Vista mínima: solo muestra el título según `data.titleKey` de la ruta.
 */
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-title-view',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './page-title-view.component.html',
  styleUrl: './page-title-view.component.scss'
})
export class PageTitleViewComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly titleKey = toSignal(
    this.route.data.pipe(map(d => (d['titleKey'] as string) || 'VIEWS.PANEL')),
    { initialValue: (this.route.snapshot.data['titleKey'] as string) || 'VIEWS.PANEL' }
  );
}
