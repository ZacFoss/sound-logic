import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// Helper function to load an HTML file into a simulated JSDOM environment
function loadHTMLFile(filename) {
  const filePath = path.resolve(__dirname, '../Onboarding_Electron_Code', filename);
  const htmlContent = fs.readFileSync(filePath, 'utf8');
  return new JSDOM(htmlContent);
}

describe('Onboarding Flow Accessibility and Structure Tests', () => {

  // ==================== SCREEN 1: signup.html ====================
  describe('Screen 1: signup.html', () => {
    let dom;
    let document;

    beforeEach(() => {
      dom = loadHTMLFile('signup.html');
      document = dom.window.document;
    });

    it('should have the correct document title', () => {
      expect(document.title).toContain('CareConnect — Sign Up');
    });

    it('should contain a semantic navigation landmark', () => {
      const nav = document.querySelector('nav');
      expect(nav).not.toBeNull();
      expect(nav.getAttribute('aria-label')).toBe('Application Menu');
    });

    it('should have a high-contrast step description text style', () => {
      const p = document.querySelector('p');
      expect(p).not.toBeNull();
      // Verifies contrast color adjustment is present
      expect(p.getAttribute('style')).toContain('color: #555');
    });

    it('should have correct labels mapped to the input fields', () => {
      const fullnameLabel = document.querySelector('label[for="fullname"]');
      const emailLabel = document.querySelector('label[for="email"]');
      const passwordLabel = document.querySelector('label[for="password"]');

      expect(fullnameLabel).not.toBeNull();
      expect(emailLabel).not.toBeNull();
      expect(passwordLabel).not.toBeNull();

      expect(document.getElementById('fullname')).not.toBeNull();
      expect(document.getElementById('email')).not.toBeNull();
      expect(document.getElementById('password')).not.toBeNull();
    });
  });

  // ==================== SCREEN 2: getting_started.html ====================
  describe('Screen 2: getting_started.html', () => {
    let dom;
    let document;

    beforeEach(() => {
      dom = loadHTMLFile('getting_started.html');
      document = dom.window.document;
    });

    it('should have a semantic main content landmark', () => {
      const main = document.querySelector('main');
      expect(main).not.toBeNull();
      expect(main.className).toContain('container');
    });

    it('should configure the custom communication preferences container properly', () => {
      const radiogroup = document.querySelector('[role="radiogroup"]');
      expect(radiogroup).not.toBeNull();
      expect(radiogroup.getAttribute('aria-labelledby')).toBe('comm-label');
    });

    it('should contain tabable custom option elements', () => {
      const options = document.querySelectorAll('.selector-card');
      expect(options.length).toBe(3);
      options.forEach(option => {
        expect(option.getAttribute('role')).toBe('radio');
        expect(option.getAttribute('tabindex')).toBe('0');
      });
    });
  });

  // ==================== SCREEN 3: create_account.html ====================
  describe('Screen 3: create_account.html', () => {
    let dom;
    let document;

    beforeEach(() => {
      dom = loadHTMLFile('create_account.html');
      document = dom.window.document;
    });

    it('should have the correct step 3 heading and high-contrast text description', () => {
      const h2 = document.querySelector('h2');
      const p = document.querySelector('p');
      expect(h2.textContent).toBe('Create Account');
      expect(p.getAttribute('style')).toContain('color: #555');
    });

    it('should possess a clear focusable registration submission button', () => {
      const submitBtn = document.querySelector('.btn-submit');
      expect(submitBtn).not.toBeNull();
      expect(submitBtn.textContent).toBe('Complete Registration');
    });
  });
});