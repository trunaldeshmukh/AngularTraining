import { OrxeRatingBar } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-rating-bar-axe', () => {
  let ratingBar;

  beforeEach(async function() {
    OrxeRatingBar;

    ratingBar = document.createElement('orxe-rating-bar') as OrxeRatingBar;
    await document.body.append(ratingBar);
  });

  afterEach(async function() {
    await ratingBar.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(ratingBar);
    expect(result).toHaveNoViolations();
  });
  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (ratingBar.hasOwnProperty(property)) {
        ratingBar[property] = properties[property];
      }
    }
    await ratingBar.requestUpdate();
  }

  it('should support all WCAG Accessibility Rules. when default rating bar is rendered', async () => {
    const result = await axe(ratingBar);
    expect(result).toHaveNoViolations();
  });

  it('should support all WCAG Accessibility Rules. for donut rating bar', async () => {
    await setProperties({ type: 'donut' });
    const result = await axe(ratingBar);
    expect(result).toHaveNoViolations();
  });
});
