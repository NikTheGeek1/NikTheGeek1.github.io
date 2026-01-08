import { test, expect } from '@playwright/test';

test('projects deep link opens learning portal', async ({ page }) => {
  await page.goto('/#/projects?path=Projects&project=learning-portal');

  await expect(
    page.getByRole('heading', { name: 'Selected deliveries' })
  ).toBeVisible();

  const project = page.locator('#learning-portal');
  await expect(project).toBeVisible();
  await expect(project).toHaveClass(/project-container-expanded/);
});
