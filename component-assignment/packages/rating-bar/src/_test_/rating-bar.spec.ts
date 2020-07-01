import { OrxeRatingBar } from '../';
import {
  toHaveStyle,
  toHaveTextContent,
  toHaveClass,
  toHaveAttribute
} from '@testing-library/jest-dom/matchers';

expect.extend({ toHaveStyle, toHaveClass, toHaveTextContent, toHaveAttribute });


describe('orxe-rating-bar', () => {
  let ratingBar;

  beforeEach(async function() {
    OrxeRatingBar;

    ratingBar = document.createElement('orxe-rating-bar') as OrxeRatingBar;
    await document.body.append(ratingBar);
  });

  afterEach(async function() {
    await ratingBar.remove();
  });

  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (ratingBar.hasOwnProperty(property)) {
        ratingBar[property] = properties[property];
      }
    }
    await ratingBar.requestUpdate();
  }
  function getByTestId(id: string): HTMLElement {
    return ratingBar.shadowRoot!.querySelector(`[data-testid=${id}]`) as HTMLElement;
  }
  it('should check default values of properties', async () => {
    expect(ratingBar.type).toEqual('linear');
    expect(ratingBar.rating).toEqual(0);
    expect(ratingBar.label).toBeFalsy();
  });

  it('check Parent class for linear rating bar', async () => {
    await setProperties({ type: 'linear' });
    const linearRatingBar = getByTestId('linear-rating-bar');
    expect(linearRatingBar).toHaveClass('rating-bar-container');
  });

  it('check Parent class for donut rating bar', async () => {
    await setProperties({ type: 'donut' });
    const donutRatingBar = getByTestId('donut-rating-bar');
    expect(donutRatingBar).toBeTruthy();
  });

  it('check Rating for Linear rating bar', async () => {
    await setProperties({ rating: 90 });
    const ratingValue = getByTestId('linear-rating-value');
    expect(ratingValue).toHaveTextContent('9');
  });

  it('check Progress for Linear rating bar', async () => {
    await setProperties({ rating: 80 });
    const linearTrack = getByTestId('linear-indicator');
    expect(linearTrack).toHaveStyle({ width: '80%' });
  });

  it('check Progress for Linear rating bar when below 0', async () => {
    await setProperties({ rating: -10 });
    const linearTrack = getByTestId('linear-indicator');
    expect(linearTrack).toHaveStyle({ width: '0%' });
  });

  it('check Progress for Linear rating bar when above 10', async () => {
    await setProperties({ rating: 150 });
    const linearTrack = getByTestId('linear-indicator');
    expect(linearTrack).toHaveStyle({ width: '100%' });
  });

  it('check Class for Linear rating bar when rating in range 7-8.5', async () => {
    await setProperties({ rating: 80 });
    const linearTrack = getByTestId('linear-indicator');
    expect(linearTrack).toHaveClass('rating--great');
  });

  it('check Class for Linear rating bar when rating above 8.5', async () => {
    await setProperties({ rating: 90 });
    const linearTrack = getByTestId('linear-indicator');
    expect(linearTrack).toHaveClass('rating--excellent');
  });

  it('check Class for Linear rating bar when rating is 1', async () => {
    await setProperties({ rating: 10 });
    const linearTrack = getByTestId('linear-indicator');
    expect(linearTrack).toHaveClass('rating--bad');
  });

  it('check Rating for Donut rating bar', async () => {
    await setProperties({ rating: 71, type: 'donut' });
    const donutRating = getByTestId('donut-rating');
    expect(donutRating).toHaveTextContent('7.1');
  });

  it('check Progress for Donut rating bar', async () => {
    await setProperties({ rating: 50, type: 'donut' });
    const donutTrack = getByTestId('donut-track-indicator');
    expect(donutTrack).toHaveStyle({ 'stroke-dashoffset': 56.52 });
  });

  it('check Progress for Donut rating bar when below 0', async () => {
    await setProperties({ rating: -10, type: 'donut' });
    const donutTrack = getByTestId('donut-track-indicator');
    expect(donutTrack).toHaveStyle({ 'stroke-dashoffset': 113.04 });
  });

  it('check Progress for Donut rating bar when above 10', async () => {
    await setProperties({ rating: 140, type: 'donut' });
    const donutTrack = getByTestId('donut-track-indicator');
    expect(donutTrack).toHaveStyle({ 'stroke-dashoffset': 0 });
  });

  it('check Class for Donut rating bar when rating in range 5-7', async () => {
    await setProperties({ rating: 60, type: 'donut' });
    const donutTrack = getByTestId('donut-track-indicator');
    expect(donutTrack).toHaveClass('donut-average');
  });

  it('check Class for Donut rating bar when rating above 8.5', async () => {
    await setProperties({ rating: 90, type: 'donut' });
    const donutTrack = getByTestId('donut-track-indicator');
    expect(donutTrack).toHaveClass('donut-excellent');
  });

  it('check Class for Donut rating bar when rating in range 3-5', async () => {
    await setProperties({ rating: 40, type: 'donut' });
    const donutTrack = getByTestId('donut-track-indicator');
    expect(donutTrack).toHaveClass('donut-poor');
  });

  it('check Class for Donut rating bar when rating in range 1-3', async () => {
    await setProperties({ rating: 20, type: 'donut' });
    const donutTrack = getByTestId('donut-track-indicator');
    expect(donutTrack).toHaveClass('donut-bad');
  });

  it('check Rating for Decimal Input values for Donut Rating bar', async () => {
    await setProperties({ rating: 85.3434, type: 'donut' });
    const donutRating = getByTestId('donut-rating');
    expect(donutRating).toHaveTextContent('8.5');
  });

  it('check Rating for Decimal Input values for Linear Rating Bar', async () => {
    await setProperties({ rating: 75.0123, type: 'linear' });
    const linearRating = getByTestId('linear-rating-value');
    expect(linearRating).toHaveTextContent('7.5');
  });

  it('check if aria-label attribute is present', () => {
    ratingBar.setAttribute('aria-label', 'Rating Bar');
    expect(ratingBar).toHaveAttribute('aria-label', expect.stringContaining('Rating Bar'));
  });

});