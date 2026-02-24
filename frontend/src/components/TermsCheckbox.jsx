import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { cn } from '../lib/utils';

/**
 * Reusable terms & privacy acceptance checkbox for forms.
 * Required before submitting any form that collects personal data.
 */
export const TermsCheckbox = ({ checked, onChange, error, className }) => (
  <div className={cn('space-y-2', className)}>
    <div className="flex items-start gap-3">
      <Checkbox
        id="acceptTerms"
        checked={checked}
        onCheckedChange={(v) => onChange(!!v)}
        className="mt-1"
        aria-invalid={!!error}
      />
      <Label
        htmlFor="acceptTerms"
        className="text-sm text-gray-700 cursor-pointer leading-tight"
      >
        I have read and agree to the{' '}
        <Link to="/terms-and-conditions" className="text-red-600 hover:underline font-medium">
          Terms &amp; Conditions
        </Link>
        {' '}and{' '}
        <Link to="/privacy-policy" className="text-red-600 hover:underline font-medium">
          Privacy Policy
        </Link>
        , and I consent to the collection and use of my information as described therein.
      </Label>
    </div>
    {error && <p className="text-red-600 text-sm">{error}</p>}
  </div>
);

export default TermsCheckbox;
