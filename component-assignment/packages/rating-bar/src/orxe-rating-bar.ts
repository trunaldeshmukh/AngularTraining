import { html, customElement, LitElement, property, TemplateResult } from 'lit-element';
import styles from './rating-bar-css';
import {styleMap} from 'lit-html/directives/style-map.js';

@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  @property({ type: String, reflect: true })
  type = 'donut';

  @property({ type: Number, reflect: true })
  rating = 50;

  @property({ type: String, reflect: true })
  label = 'Rating';

  private actualRating = 0;

  render() {
    this.actualRating = this.getRating();
    return html`
      ${this._renderRatingBar()}
    `;
  }
  getRating(): number {
    return !this.rating
      ? 0
      : this.rating > 100
        ? 10
        : this.rating < 0
          ? 0
          : Math.floor(this.rating) / 10;
  }

  private _renderRatingBar(): TemplateResult {
    if (this.type == 'linear') {
      return html`
        <div class="rating-bar-container" data-testid="linear-rating-bar">
          <div
            data-testid="linear-indicator"
            style=${styleMap(this._showProgress())}
            class="${this._getColurClass()} rating-bar">
          </div>
        </div>
        <div class="rating-bar-info">
          <span>${this.label}</span>
          <span data-testid="linear-rating-value">${this.actualRating}</span>
        </div>
      `;
    }
    else {
      return html`
      <svg
      data-testid="donut-rating-bar"
      aria-hidden="true"
      class="donut"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <circle cx="20" cy="20" r="18" class="donut-container" />
      <circle
        data-testid="donut-track-indicator"
        cx="20"
        cy="20"
        r="18"
        style=${styleMap(this._showProgress())}
        class="donut-indicator ${this._getdonutClasses()}"
      />
    </svg>
    <div data-testid="donut-rating" class="donut-info">${this.actualRating}</div>`;

    }

  }
  private _getColurClass(): string {
    if (this.actualRating >= 1 && this.actualRating < 3) {
      return 'rating--bad';
    } else if (this.actualRating >= 3 && this.actualRating < 5) {
      return 'rating--poor';
    } else if (this.actualRating >= 5 && this.actualRating < 7) {
      return 'rating--average';
    } else if (this.actualRating >= 7 && this.actualRating < 8.5) {
      return 'rating--great';
    } else if (this.actualRating >= 8.5) {
      return 'rating--excellent';
    } else {
      return '';
    }
  }
  private _showProgress(): Record<string, string> {
    const progress = {};
    if (this.type == 'donut') {
      if (this.rating > 100) {
        progress['stroke-dashoffset'] = 0;
      } else if (this.rating < 0) {
        progress['stroke-dashoffset'] = 113.04;
      } else {
        progress['stroke-dashoffset'] = 113.04 * (1 - this.rating / 100);
      }
      return progress;
    } else {
      if (this.rating > 100) {
        progress['width'] = '100%';
      } else if (this.rating < 0) {
        progress['width'] = '0%';
      } else {
        progress['width'] = this.rating + '%';
      }
      return progress;
    }
  }
  private _getdonutClasses(): string {
    if (this.actualRating >= 1 && this.actualRating < 3) {
      return `donut-bad`;
    } else if (this.actualRating >= 3 && this.actualRating < 5) {
      return `donut-poor`;
    } else if (this.actualRating >= 5 && this.actualRating < 7) {
      return `donut-average`;
    } else if (this.actualRating >= 7 && this.actualRating < 8.5) {
      return `donut-great`;
    } else if (this.actualRating >= 8.5) {
      return `donut-excellent`;
    } else {
      return '';
    }
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
